import { getBannerData, media } from '@/lib/api'
import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Image from 'next/image';

async function BannerSection({fetcher}) {
  return (
    <Suspense fallback={<BannerSectionFallback/>}>
      <BannerSectionContent  fetcher={fetcher}/>
    </Suspense>
  )
}


async function BannerSectionContent({fetcher}) {
  const data = await fetcher();
  // console.log(data);
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full  md:px-0 px-4"
    >
      <CarouselContent className="">
        {data?.map((vid) => (
          <CarouselItem key={vid.id} className="w-full max-w-[700px] h-[500px]">
            <Image
              src={media(vid?.poster_path)}
              alt=""
              width={700}
              height={500}
              className="w-full h-full bg-slate-600 rounded-lg object-cover"
              quality={30}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 right-[12%] hidden md:flex">
        <CarouselPrevious className="w-[60px] h-[60px]" />
        <CarouselNext className="w-[60px] h-[60px] ml-2" />
      </div>
    </Carousel>
  )
}
function BannerSectionFallback() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
    </div>
  )

}

export default BannerSection;

