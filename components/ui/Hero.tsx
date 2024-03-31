'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export default function Hero() {
  return (
    <div className=" bg-blue-100/75 opacity-5 grayscale blur-sm bg-fixed absolute  contrast-[4] saturate-200 h-[100%] w-full overflow-x-hidden">
      <Carousel plugins={[
        Autoplay({
          delay:15000
        }),
      ]}>
        <CarouselContent>
          
          <CarouselItem><video src='/854877-hd_1920_1080_25fps.mp4' autoPlay loop muted /></CarouselItem>
          <CarouselItem><video muted autoPlay loop src='/162255-824953796_small.mp4' /></CarouselItem>
          <CarouselItem><video muted autoPlay loop src='/47431-451444735_small.mp4' /></CarouselItem>
          <CarouselItem><video src='/5027872-hd_2048_1080_30fps.mp4' autoPlay muted loop /></CarouselItem>
          <CarouselItem><video src='/7166468-hd_1920_1080_24fps.mp4' autoPlay muted loop /></CarouselItem>
          <CarouselItem><video src='/7348437-hd_1920_1080_24fps.mp4' autoPlay muted loop /></CarouselItem>
          <CarouselItem><video src='/122319-725513177_small.mp4' autoPlay muted loop /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}