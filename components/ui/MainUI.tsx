import { ReactNode, useState } from 'react'
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import SideMenuItem from '@/components/ui/SideMenuItem'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { CrossIcon } from "lucide-react";
import { Button } from "@/components/ui/button"

import { hamburger, cross } from "@/lib/paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { interpolate } from 'flubber'

import { StoreProvider, useStore } from "@/lib/store";



export default function MainUI({ children }: { children: ReactNode }) {

  const setSideMenuOpen = useStore((state: any) => state.setSideMenuOpen)
  const [pathIndex, setPathIndex] = useState(0)
  const progress = useMotionValue(pathIndex)
  const path = interpolate(hamburger, cross, { maxSegmentLengh: 0.5 })

  const onOpenChange = (open: Boolean) => {
    console.log(`svg clicked`)
    if (!open) {
      animate(1, 0, { duration: 0.1, onUpdate: latest => setPathIndex(latest) })
      setSideMenuOpen(false)
    } else {
      animate(0, 1, { duration: 0.1, onUpdate: latest => setPathIndex(latest) })
      setSideMenuOpen(true)

    }
  }

  return (
    <>
      <Sheet modal={false} onOpenChange={onOpenChange}>
        <header className='flex min-w-full'>
          <NavigationMenu className='text-xl !min-w-full flex fixed justify-between align-middle px-4 bg-blue-300/70 py-4' >
            <NavigationMenuList className="flex relative w-[95vw] align-baseline font-bold justify-start" >
              <NavigationMenuItem className="leading-[2.25rem]">
                <SheetTrigger >
                  <div className="scale-[2]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#bfdbfe" xmlns="http://www.w3.org/2000/svg"><path d={path(pathIndex)} fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div> </SheetTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <h2 className="text-3xl">Outdoor Recreation and Active Living</h2>
              </NavigationMenuItem>
              <NavigationMenuItem className="leading-[2.8rem]">
                <Link href='/'>Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="leading-[2.8rem] flex align-middle">
                <Link href='/about'>About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="absolute right-0 leading-[2.8rem] align-middle flex justify-evenly justify-self-end">
                <Button className='mx-2'>
                  <Link href=''>Login</Link>
                </Button>
                <Link className="leading-[2.8rem] mx-2 justify-self-end align-middle text-lg" href=''>Signup</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        <SheetContent side='left' className='flex-col bg-blue-300/50 top-[4.8rem] !w-[250px]'>
          <SheetHeader className="">
            <SheetTitle className="text-blue-50 font-bold">MENU</SheetTitle>
          </SheetHeader>
          <NavigationMenu className='text-xl !px-0' orientation='vertical'>
            <NavigationMenuList className='flex-col space-x-0 space-y-5 !px-0 '>
              <SideMenuItem className='mt-3' href=''>
                Health Education
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Physical Education
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Outdoor Education
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Australia Athletic
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                AustSwim
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Bicycle Education
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Snow Australia
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Royal Lifesaving
              </SideMenuItem>
              <SideMenuItem className='' href=''>
                Van/Bus Travel
              </SideMenuItem>
              <SideMenuItem className='font-black' href=''>
                Japan Winter Trip
              </SideMenuItem>
              <SideMenuItem className='font-black' href=''>
                Australia OED Camp
              </SideMenuItem>
              <SideMenuItem className='font-black' href=''>
                Higher Education in the USA
              </SideMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      {children}
    </>
  )
}