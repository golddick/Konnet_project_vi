import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'


interface UserIconProps {
    isLive: boolean
    isLoggedIN:boolean
}

const UserIcon = ({isLive,isLoggedIN}:UserIconProps) => {
  return (
    <>

    {
      isLoggedIN && (
        <div className={cn('flex w-10 h-10  justify-center items-center lg:block' , isLive && 'border-2  lg:justify-center lg:w-[40px] lg:h-[40px] border-red-500 lg:flex rounded-full ')}>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    </div>
      )
    }
    
    </>
  
  )
}

export default UserIcon