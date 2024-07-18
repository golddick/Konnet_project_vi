'use client'

import { cn } from "@/lib/utils"

import { useChatSiderbar } from "@/store/use-sideBar"
import { useCreatorSidebar } from "@/store/use-sidebar-creator"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

interface ContainerProps {children: React.ReactNode};

export const CreatorDashboardContainer = ({children,}: ContainerProps) => {
    const deviceMatches = useMediaQuery('(max-width: 1500px)')
    const {collapsed,onCollapse,onExpand} = useCreatorSidebar((state) => state)

    useEffect (() => {
        if (deviceMatches) {
            onCollapse();
        } else {
            onExpand
        }
    },[onCollapse,onExpand,deviceMatches])

    return (
        <div className={cn('flex-1', collapsed ? 'ml-0 lg:ml-[60px]' :'ml-0 lg:ml-60  md:ml-0')}>
        {/* <div className={cn('flex-1', collapsed ? 'ml-0 lg:ml-[60px]' :'ml-0 lg:ml-60  md:ml-0')}> */}
            {children}
        </div>
    )
}