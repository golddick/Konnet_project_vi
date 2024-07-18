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
  
//   interface SideDotProps {
//     isLoggedIN:boolean
//   }

const StreamSideDot = () => {

 


  return (
    <div className='h-[10px] w-[10px] flex items-center '>
        <DropdownMenu>
  <DropdownMenuTrigger className='flex focus:outline-none'><MoreVertIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
 
    <DropdownMenuItem>Report</DropdownMenuItem>
    <DropdownMenuItem>Subscribe </DropdownMenuItem>
    <DropdownMenuItem>Share </DropdownMenuItem>


  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default StreamSideDot