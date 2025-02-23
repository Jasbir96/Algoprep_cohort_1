import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../section/Header";
import { useSelector } from "react-redux";

const ProfileSheet = () => {
    const [open, setOpen] = useState(false);
    const userData = useSelector((state) => state.user);
    const handleClick = async () => {
        console.log("clicked");
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <Image
                    src="/profile.avif"
                    alt="Profile Icon"
                    className="ml-4 h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                />
            </SheetTrigger>
            <SheetContent side={"right"} className="px-6">
                <div className="bg-slate-700/30 p-6 flex flex-col items-center gap-2 mt-[100px] rounded-lg">
                    <Image
                        src="/profile.avif"
                        alt="Profile Icon"
                        className="h-[100px] w-[100px] rounded-full -mt-[60px]"
                        width={40}
                        height={40}
                    />
                    <p className="text-xl font-bold capitalize">
                        {userData.isLoggedIn ? userData.user.name : "Guest"}
                    </p>
                    <Link
                        href={`${userData.isLoggedIn ? "/" : "/login"}`}
                        className="rounded-full font-medium mt-4 text-base px-4 py-2 bg-pink-600"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        {userData.isLoggedIn ? "Logout" : "Login"}
                    </Link>
                </div>
                <div className="divide-y my-4">
                    <Link
                        href={"/subscription"}
                        className="flex items-center justify-between px-2 py-4 text-sm"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Subscribe Now
                        <ChevronRightIcon className="w-6 h-6" />
                    </Link>
                    <div>
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className="flex items-center justify-between px-2 py-4 text-sm"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {link.name}
                                <ExternalLinkIcon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                    <Link
                        href={"/"}
                        className="flex items-center justify-between px-2 py-4 text-sm"
                    >
                        Help and Legal
                        <ChevronRightIcon className="w-6 h-6" />
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ProfileSheet;
