'use client'

import { cn } from "@/lib/utils"

import { useChatSiderbar } from "@/store/use-sideBar"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

interface ContainerProps {children: React.ReactNode};

export const HomeContainer = ({children,}: ContainerProps) => {
    const deviceMatches = useMediaQuery('(max-width: 1500px)')
    const {collapsed,onCollapse,onExpand} = useChatSiderbar((state) => state)

    useEffect (() => {
        if (deviceMatches) {
            onCollapse();
        } else {
            onExpand
        }
    },[onCollapse,onExpand,deviceMatches])

    return (
        <div className={cn('flex-1 w-full', collapsed && 'w-full')}>
            {children}
        </div>
    )
}