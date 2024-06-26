import React from 'react'
import { cn } from '@/lib/utils'

interface LiveBadgeProps {
    className?: string
}

const LiveBadge = ({className,}:LiveBadgeProps) => {
  return (
    <div className={cn('bg-red-600 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold  ', className)}>
        Live
    </div>
  )
}

export default LiveBadge