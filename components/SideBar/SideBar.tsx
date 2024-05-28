import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import GrainIcon from '@mui/icons-material/Grain';
  import { Separator } from "@/components/ui/separator"

  
  interface SideBarProps {
    side: "top" | "bottom" | "left" | "right";
  }

const SideBar = ({side}:SideBarProps) => {
  return (

    <Sheet key={side} >
        <SheetTrigger><GrainIcon/></SheetTrigger>
        <SheetContent side={side} className='w-[100px]  border-r border-[#b28228] lg:w-[200px]'>
            <div className='w-full h-screen flex gap-4  flex-col'>
                <h1 style={{fontSize:'20px'}}>KONNET</h1>
                <Separator />

            </div>
        </SheetContent>
    </Sheet>


  )
}

export default SideBar
