'use client'

import RegToggle from "@/components/Recommended/_component/RegToggle"
import { Skeleton } from "@/components/ui/skeleton"

const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b flex items-center justify-between">
        <RegToggle/>
        <p className="font-semibold text-[#b28228] text-center">Stream Chat Room</p>

    </div>
  )
}

export default ChatHeader

export const ChatHeaderSkeleton = () => {
    return (
        <div className=" relative p-3 border-b">

                <Skeleton className="absolute h-6 w-6 left-3 top-3"/>
                <Skeleton className="w-[200px] h-6 mx-auto"/>

        </div>
    )
}