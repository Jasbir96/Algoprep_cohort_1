import Image from "next/image";
import Link from "next/link";

const headings = [
    {
        title: "JioCinema",
        links: ["For You", "Sports", "Movies", "TV Shows"],
    },
    {
        title: "Support",
        links: [
            "Help Center",
            "Terms Of Use",
            "Privacy Policy",
            "Content Complaints",
        ],
    },
];

const downloadAppLinks = [
    {
        icon: "/googlePlay.svg",
        alt: "Google Play",
    },
    {
        icon: "/appleStore.svg",
        alt: "App Store",
    },
];

const connectWithUsLinks = [
    {
        icon: "facebook.svg",
        href: "#",
    },
    {
        icon: "x.svg",
        href: "#",
    },
    {
        icon: "instagram.svg",
        href: "#",
    },
    {
        icon: "youtube.svg",
        href: "#",
    },
];


export default function Footer() {
    return (
        <footer className="bg-[#17181a] text-gray-300">
            <div className="md:mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start px-8 py-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mt-8">
                        {headings.map((heading, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold uppercase">{heading.title}</h3>
                                <div className="flex flex-col">
                                    {heading.links.map((link, linkIndex) => (
                                        <Link href="#" key={linkIndex}>
                                            {link}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 mt-8">
                        <h3 className="text-lg font-bold uppercase">Connect With Us</h3>
                        <div className="flex gap-4">
                            {connectWithUsLinks.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    href={link.href}
                                    className="rounded-full bg-gray-700 p-2 hover:bg-gray-600"
                                >
                                    <Image
                                        src={"/" + link.icon}
                                        alt={link.href}
                                        width={40}
                                        height={40}
                                        className="md:h-10 md:w-10 h-8 w-8"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-0 md:gap-1  md:mt-0">
                        <h3 className="text-lg font-bold uppercase mt-8">
                            Download the App
                        </h3>
                        <div className="flex gap-4">
                            {downloadAppLinks.map((link, linkIndex) => (
                                <Link key={linkIndex} href="#" className="flex items-center">
                                    <Image
                                        src={link.icon}
                                        width={96}
                                        height={64}
                                        alt={link.alt}
                                        className="w-[96px] h-[64px] md:w-[120px] md:h-[120px]"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:text-center text-start mt-8 flex w-full justify-between items-center bg-[#202123] py-4 px-4">
                    <p className="md:text-sm text-xs">
                        Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
                    </p>
                    <Image
                        src="/jio-logo.png"
                        alt="Jio Logo"
                        width={48}
                        height={48}
                        className="md:h-12 md:w-12 h-10 w-10"
                    />
                </div>
            </div>
        </footer>
    );
}
