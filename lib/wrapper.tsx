'use client'


import { useChatSiderbar } from "@/store/use-sideBar"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
// import { ToggleSkeleton } from "./Toggle"
// import { RecommendedSkeleton } from "./Recommended"
// import { FollowingSkelton } from "./Following"

interface WrapperProps{children:React.ReactNode}

export const Wrapper = ({children}:WrapperProps) => {

const {collapsed} = useChatSiderbar((state) => state)

const [isClient, setIsClient] = useState(false)

useEffect(() => {
    setIsClient(true)
},[])

if(!isClient) return (
    <aside
    className={cn('grid-cols-1 lg:grid   lg:grid-cols-[2fr_0.5fr]  md:grid md:grid-cols-2 relative', collapsed && 'lg:grid-cols-1  md:grid-cols-1'   )
  
}
    >

        <p>no more</p>
        {/* <ToggleSkeleton/>
        <FollowingSkelton/>
        <RecommendedSkeleton/> */}
    </aside>
)

    return(
        <aside
        className={cn('grid-cols-1 lg:grid   lg:grid-cols-1  md:grid md:grid-cols-2 relative  w-full', collapsed && 'lg:grid-cols-1  md:grid-cols-1')
      
    }
        >
            {children}
        </aside>
    )
}