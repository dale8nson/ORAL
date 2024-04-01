
'use client';
import { useEffect, useState } from "react";
import "./globals.css";
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
import MainUI from '@/components/ui/MainUI'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className=' bg-blue-900 !text-blue-200'>
        <StoreProvider>
          <MainUI>
            {children}
          </MainUI>
        </StoreProvider>
      </body>
    </html>
  );
}
