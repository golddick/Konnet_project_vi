'use client'

import { useCreatorSidebar } from "@/store/use-sidebar-creator"
import { useChatSiderbar } from "@/store/use-sideBar"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { DashNavItemSkeleton } from "./DashNavItem"
import { ToggleSkeleton } from "./Toggle"
import { Skeleton } from "@/components/ui/skeleton"


interface WrapperProps{children:React.ReactNode}

export const CreatorWrapper = ({children}:WrapperProps) => {

const {collapsed} = useCreatorSidebar((state) => state)

const [isClient, setIsClient] = useState(false)

useEffect(() => {
    setIsClient(true)
},[])

if(!isClient) return (
    <aside
    className={cn('fixed  flex flex-col w-0 h-full bg-background  z-50 ' )
  
}
    >
<div className="hidden lg:block  justify-center items-center">
<ToggleSkeleton/>
</div>
    </aside>
)

    return(
        <aside
        className={cn('fixed flex flex-col  w-0 lg:w-60   h-full border-r border-[#b28228]  z-50 ' ,   collapsed && 'hidden lg:block  lg:w-[60px]')
      
    }
        >
            {children}
        </aside>
    )
}