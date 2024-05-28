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
        <div className={cn('flex items-center lg:block' , isLive && 'border-2 border-red-500 rounded-full ')}>
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