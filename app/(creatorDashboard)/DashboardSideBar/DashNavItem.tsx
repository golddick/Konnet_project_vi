'use client'

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-sidebar-creator";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
    href: string;
    label: string;
    icon:LucideIcon;
    isActive:boolean,
    key: number
}

const DashNavItem = ({key, label, icon:Icon, href, isActive}: NavItemProps) => {
    const {collapsed} = useCreatorSidebar((state) => state)
  return (

  <div className={cn(' hover:border-[#b28228] hover:border-l-2 hover:border-b-2 rounded-sm ',isActive && 'border-[#b28228] border-l-2 rounded-sm w-full')}>
      <Button
    asChild
    variant='goldBTN'
    className={cn('w-full h-12 ', collapsed ? 'justify-center' : "justify-start", )}
    key={key}
    >
        <Link href={href}>
        <div className="flex items-center gap-x-4">
            <Icon
            className={cn('h-4 w-4', collapsed ? 'mr-0' : 'mr-2')}
            />
            {!collapsed &&(
                <span>{label}</span>
            )}
        </div>
        </Link>

    </Button>
  </div>
        
  )
}

export default DashNavItem


export const DashNavItemSkeleton = () => {
    return(
        <li className='flex items-center gap-x-4 px-3 py-2'>
        <Skeleton className="min-h-[48px] rounded-md"/>
        <div className="flex-1 hidden lg:block">
            <Skeleton className="h-6"/>
        </div>
        </li>
    )
}


