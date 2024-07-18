import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'


interface UserIconProps {
    isLive: boolean
    isLoggedIN:boolean
}

const DashBoardUserIcon = ({isLive,isLoggedIN}:UserIconProps) => {
  return (
    <>

    {
      isLoggedIN && (
        <div className={cn('flex w-[60px] h-[60px]  lg:w-[70px] lg:h-[70px] justify-center items-center lg:block' , isLive && 'border-2  lg:justify-center lg:w-[80px] lg:h-[80px] border-[#b28228] lg:flex rounded-full ')}>
        <Avatar className='w-full h-full'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    </div>
      )
    }
    
    </>
  
  )
}

export default DashBoardUserIcon