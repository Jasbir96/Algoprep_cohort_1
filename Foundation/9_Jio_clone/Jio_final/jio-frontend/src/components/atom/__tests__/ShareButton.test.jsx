import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ShareButton from "../ShareButton";
import { toast } from "sonner";

// Mock the dependencies
jest.mock("sonner", () => ({
    toast: jest.fn()
}));


describe("share button testcases", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Mock window.location
        window.location.href = 'http://test-url.com';

    });

    it("initial render", () => {
        render(<ShareButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Share');
    });

    it("share success", async () => {
        // Mock successful clipboard write
        const mockClipboard = {
            writeText: jest.fn().mockResolvedValue(undefined)
        };
        navigator.clipboard = mockClipboard;

        render(<ShareButton />);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Verify success toast
        await waitFor(() => {
            expect(toast).toHaveBeenCalledWith("URL copied to the clipboard");
        });
    });

    it("share failure", async () => {
        // Mock failed clipboard write
        const mockClipboard = {
            writeText: jest.fn().mockRejectedValue(new Error('Failed to copy'))
        };
        navigator.clipboard = mockClipboard;
        render(<ShareButton />);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Verify error toast
        await waitFor(() => {
            expect(toast).toHaveBeenCalledWith("failed to copy url");
        });
    });
});