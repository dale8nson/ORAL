import { ReactNode } from "react"
import { NavigationMenuItem } from "./navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SideMenuItem({ children, href, className }: { children: ReactNode, href: string, className: string }) {
  return (
    <NavigationMenuItem className={cn([className])}>
      <Link href={href} className='justify-start items-start'>
        {children}
      </Link>
    </NavigationMenuItem>
  )
}