'use client'

import React from 'react'
import { useChatSiderbar } from '@/store/use-sideBar'
import { cn } from '@/lib/utils'
import Recommended from '@/components/Recommended/Recommended'
import RegToggle from '@/components/Recommended/_component/RegToggle'
import StreamHome from '@/components/StreamHome/StreamHome'


const LandingPage = () => {

    const {collapsed} = useChatSiderbar((state) => state)
  return (

<>


<div className={cn(' grid-cols-1 lg:grid   lg:grid-cols-[2fr_0.5fr]  md:grid md:grid-cols-[2fr_1fr] relative', collapsed && 'lg:grid-cols-1  md:grid-cols-1' )} >

{
      collapsed && ( 
        <div className=' hidden  md:block lg:block fixed lg:top-[10px] md:top-[100px] bg-black rounded-sm right-2 z-50 lg:absolute '>
          <RegToggle/>
        </div>
      )
    }

    <div className="  h-[calc(100vh-100px)] w-full ">
        <StreamHome/>
    </div>
    <div className={cn('col-span-1 w-full  h-full  hidden   md:block  ', collapsed && 'hidden  md:hidden', !collapsed && 'lg:block ') }>
        <Recommended/>
        {/* <p>s</p> */}
    </div>
</div>
</>
  )
}

export default LandingPage