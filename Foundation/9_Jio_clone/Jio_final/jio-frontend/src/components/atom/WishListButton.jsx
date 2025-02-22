"use client";
import React from "react";

import { PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

const WishlistButton = () => {
    const user = useSelector((state) => state.user);
    console.log(user);
    if (!user.isLoggedIn) return <></>;
    const addToWishList = () => {
        // logic to actually add to wishlist 
    }
    return (
        <Button className="sm:ml-auto" onClick={addToWishList}>
            <PlusIcon className="w-4 h-4 mr-2" />
            Watchlist
        </Button>
    );
}

export default WishlistButton;

// this will be build on client 