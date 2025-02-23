

import ShareButton from "@/components/atom/ShareButton";
import WishlistButton from "@/components/atom/WishListButton";
import { buttonVariants } from "@/components/ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { FilmIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
const page = async ({ searchParams: { id,poster_path } }) => {
    const details = (await api.get(ENDPOINT.getTvShowsDetails(id))).data.data.results?.[0];
    console.log("posterpath",poster_path)

    return (
        <div className="mt-[80px]">
            {details ? (
                <>
                    {/* show youtube  */}
                    <iframe
                        className="w-full aspect-video lg:h-[78vh]"
                        src={`https://www.youtube.com/embed/${details?.key}`}
                    />
                    <div className="flex flex-wrap gap-4 px-4 lg:px-10 py-8 items-center">
                        <h1 className="text-2xl font-bold">{details.name}</h1>
                        <WishlistButton
                            wishlist={{
                                id: details.id,
                                name: details.name,
                                media_type: details.media_type || "tv",
                                poster_path:poster_path
                            }}
                        />
                        <ShareButton/>
                    </div>
                </>
            ) : (
                // show error
                <div className="w-full h-[60vh] flex flex-col gap-4 items-center justify-center text-slate-400">
                    <FilmIcon className="w-[100px] h-[100px]" />
                    <p>Uh Oh! Video is unavailable.</p>
                    <Link href={"/"} className={buttonVariants()}>
                        Take me Home
                    </Link>
                </div>
            )}
        </div>
    )
}

export default page;