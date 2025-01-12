import { getBannerData } from '@/lib/api'
import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

async function BannerSection() {
  return (
    <Suspense fallback={<BannerSectionFallback/>}>
      <BannerSectionContent />
    </Suspense>
  )
}


async function BannerSectionContent() {
  const data = await getBannerData();
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
          <CarouselItem key={vid.id} className="w-full max-w-[700px] h-[500px] border-2">
            <h2>{vid.title}</h2>
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

