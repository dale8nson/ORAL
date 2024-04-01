'use client'
import { useCallback, useEffect } from 'react'
import { useAnimate, animate, useMotionValue } from 'framer-motion'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Quote from "./Quote"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'

export default function Hero() {

  const progress = useMotionValue(0)

  const [emblaRef, emblaApi] = useEmblaCarousel()
  // const [scope, animate] = useAnimate()

  const anim = animate(progress, 1, {duration:1.725, repeatType:'mirror', repeat:Infinity} )

  const playAnim = useCallback((emblaApi: any) => {
    anim.play()
  }, [])

  useEffect(() => {
    anim.play()
    if (emblaApi) {
      

      // emblaApi.on('slidesInView', () => playAnim(emblaApi))
    }
  }, [])

  return (
    <div className=" bg-blue-200/100 bg-fixed absolute  contrast-[4] saturate-100 h-[100%] min-w-full z-0 overflow-x-hidden ">
      <Carousel plugins={[
        Autoplay({
          delay: 7000
        }),
      ]} ref={emblaRef}>
        <CarouselContent className="relative border-none flex min-w-full">
          <CarouselItem className="relative border-none min-w-full">
            <div className="bg-blue-950/55 px-0  min-w-full flex justify-center">
              <video className="blur-sm opacity-5 h-full brightness-50" src='/854877-hd_1920_1080_25fps.mp4' autoPlay loop muted />
              <Quote progress={progress} >“Not all classrooms have four walls”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative min-w-full px-0 border-none">
            <div className="bg-blue-950/55 flex  min-w-full justify-center">
              <video className="blur-sm opacity-5 min-w-full brightness-50 h-full" muted autoPlay loop src='/162255-824953796_small.mp4' />
              <Quote progress={progress}>“Children deserve to learn in a place and alongside a force that is as wild and alive as they are.”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative min-w-full px-0 border-none">
            <div className="bg-blue-950/55 min-w-full flex justify-center">
              <video className="blur-sm opacity-5 h-full min-w-full brightness-50" muted autoPlay loop src='/47431-451444735_small.mp4' />
              <Quote progress={progress}>“The best classroom and the richest cupboard are roofed only by the sky.”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative px-0 border-none">
            <div className="bg-blue-950/55 h-full flex justify-center">
              <video className="blur-sm opacity-5 h-full brightness-50" src='/5027872-hd_2048_1080_30fps.mp4' autoPlay muted loop />
              <Quote progress={progress} >“If we want children to flourish, to become truly empowered, then let us allow them to love the earth before we ask them to save it.”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative px-0 border-none">
            <div className="bg-blue-950/55 flex justify-center">
              <video className="blur-sm opacity-5 h-full brightness-50" src='/7166468-hd_1920_1080_24fps.mp4' autoPlay muted loop />
              <Quote progress={progress} >“To raise a nature-bonded child is to raise a rebel, a dreamer, an innovator… someone who will walk their own verdant, winding path.”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative px-0 border-none">
            <div className="bg-blue-950/55 flex justify-center">
              <video className="blur-sm opacity-5 h-full brightness-50" src='/7348437-hd_1920_1080_24fps.mp4' autoPlay muted loop />
              <Quote progress={progress}>“Nature is a tool to get children to experience not just the wider world, but themselves.”</Quote>
            </div>
          </CarouselItem>
          <CarouselItem className="relative px-0 border-none">
            <div className="bg-blue-950/55 flex justify-center">
              <video className="blur-sm opacity-5 h-full brightness-50" src='/122319-725513177_small.mp4' autoPlay muted loop />
              <Quote progress={progress} >“If we provide enough space and possibilities for moving freely, then the children will move as well as animals: skillfully, simply, securely, naturally.”</Quote>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}