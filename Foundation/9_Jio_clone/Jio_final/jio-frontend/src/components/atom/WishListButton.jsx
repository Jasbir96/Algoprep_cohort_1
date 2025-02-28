"use client";

import React, { useState } from "react";
import { LoaderPinwheel, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { toast } from "sonner";

const WishlistButton = ({ wishlist }) => {
    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    if (!user.isLoggedIn) return <></>;
    const addToWishList = async () => {
        // logic to actually add to wishlist 
        try {
            setLoading(true)
            const res = await api.post(ENDPOINT.addToWishlist, wishlist);
            if (res.status == 200) {
                toast("wishlist added");
            }
        } catch (err) {
            toast(err.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Button 
        data-testid="watchlist"
        className={`sm:ml-auto ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={addToWishList}>
            {loading ? <LoaderPinwheel data-testid="loading-icon" className="w-4 h-4 mr-2" /> : <PlusIcon className="w-4 h-4 mr-2" />}
            Watchlist
        </Button>
    );
}

export default WishlistButton;

// this will be build on client 