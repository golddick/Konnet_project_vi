'use client'

import { Skeleton } from "@/components/ui/skeleton"
import RegToggle from "./RegToggle"

const RecommendedHeader = () => {
  return (
    <div className="relative p-3 border-b flex items-center justify-between">
        <RegToggle/>

    </div>
  )
}

export default RecommendedHeader

export const RecommendedHeaderSkeleton = () => {
    return (
        <div className=" relative p-3 border-b">

                <Skeleton className="absolute h-6 w-6 left-3 top-3"/>
                <Skeleton className="w-[200px] h-6 mx-auto"/>

        </div>
    )
}