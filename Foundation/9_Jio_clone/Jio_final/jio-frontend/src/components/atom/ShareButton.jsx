"use client";
import React from "react";

import { Share2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ShareButton = () => {
    const handleShare = () => {
        // url
        const url = window.location.href;
        // clipboard -> api browser -> promise 
        navigator.clipboard
            .writeText(url)
            .then(() => {
                toast("URL copied to the clipboard");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                toast("failed to copy url");
            });
    };
    return (
        <Button onClick={handleShare} >
            <Share2Icon className="w-4 h-4 mr-2" />
            Share
        </Button>
    );
};

export default ShareButton;