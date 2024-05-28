import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
  
  interface SideDotProps {
    isLoggedIN:boolean
  }

const SideDot = ({isLoggedIN}:SideDotProps) => {

 


  return (
    <div className='h-[10px] w-[10px] flex items-center'>
        <DropdownMenu>
  <DropdownMenuTrigger className='flex focus:outline-none'><MoreVertIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
    {/* <DropdownMenuSeparator /> */}
    {
      isLoggedIN && (
        <DropdownMenuItem>Setting</DropdownMenuItem>
      )
    }
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Manual</DropdownMenuItem>
    {
  isLoggedIN  ? (
    <Link href='/Login'>
    
    <DropdownMenuItem>Logout</DropdownMenuItem>
    </Link>
  ) : (
    <DropdownMenuItem>Login</DropdownMenuItem>
  )
}

 
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default SideDot