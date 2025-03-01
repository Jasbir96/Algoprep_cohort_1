

// requirement-> 4 scenarios
//  react component -> render , fire ,screen -> to work 
// 3rd party dependecy  -> In unit test case you have emulate all these 3rd party
// react-redux
// api 
// toast

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WishlistButton from "../WishListButton";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner"
import { api } from "@/lib/api";

// mock the implementation
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

jest.mock("sonner", () => ({
    toast: jest.fn()
}))
jest.mock("@/lib/api", () => ({
    api: {
        post: jest.fn(),
    },
    ENDPOINT: {
        addToWishlist: "/api/wishlist/add",
    },
}));




describe("WishList Button", () => {
const mockWishlist = { contentId: "123", contentType: "movie" };
// clear befor
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("logged out render", () => {
        // secenario create 
        useSelector.mockReturnValue({ isLoggedIn: false });
        // it should return empty component
        // no button nothing
        render(<WishlistButton wishlist={mockWishlist} />)
        // Verify button is not visible
        const button = screen.queryByTestId('watchlist');
        expect(button).not.toBeInTheDocument();
    })

    it("logged in render", () => {
        useSelector.mockReturnValue({ isLoggedIn: true });
        // it should return button
        // button text
        // icon
        render(<WishlistButton wishlist={mockWishlist} />);
        const button = screen.queryByTestId('watchlist');
        expect(button).toBeInTheDocument();

    })

    it("add wishlist", async () => {
        // Mock user logged in
        useSelector.mockReturnValue({ isLoggedIn: true });
        // Mock API call that takes some time
        api.post.mockResolvedValue(
            {
                status: 200
            },
        );
        // when clicked :
        render(<WishlistButton wishlist={mockWishlist} />);
        const button = screen.queryByTestId('watchlist');
        fireEvent.click(button);
        // Check for loading icon using testid
        expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
        expect(button).toHaveClass("cursor-not-allowed");
        // manully call 
        // Wait for the async operation to complete
        await waitFor(() => {
            expect(toast).toHaveBeenCalledWith("wishlist added");
        });
    })
    it(" wishlist fail", async () => {
        // when clicked :
        // it should call the  backend function to add  wishlist
        //  during that -> loading
        // after that -> get this toast : wishlist added

        // Mock user logged in
        useSelector.mockReturnValue({ isLoggedIn: true });
        // Mock API call that takes some time
        api.post.mockRejectedValue(
            {
                response: {
                    data: {
                        message:"wishlist error"
                    }
                }
            }
        );
        // when clicked :
        render(<WishlistButton wishlist={mockWishlist} />);
        const button = screen.queryByTestId('watchlist');
        fireEvent.click(button);
        // Check for loading icon using testid
        expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
        expect(button).toHaveClass("cursor-not-allowed");
        // manully call 
        // Wait for the async operation to complete
        await waitFor(() => {
            expect(toast).toHaveBeenCalledWith("wishlist error");
        });

    })
})