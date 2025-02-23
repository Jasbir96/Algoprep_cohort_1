"use client";

import { api, ENDPOINT } from "@/lib/api";
import { userLoggedInDetails } from "@/redux/userSlice";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetcher = async () => {
            try {
                const res = await api.get(ENDPOINT.user);
                console.log("res",res);
                if (res.data.status === "success") {
                    console.log("res",res.data.user);
                    dispatch(userLoggedInDetails(res.data.user));
                }
            } catch (err) {
                console.log("User needs to Login", err);
            } finally {
                setLoading(false);
            }
        };
        fetcher();
    }, [dispatch]);

    if (loading)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader2Icon className="w-[100px] h-[100px] animate-spin" />
            </div>
        );
    return <>
        {children}
    </>
}

export default AuthProvider;