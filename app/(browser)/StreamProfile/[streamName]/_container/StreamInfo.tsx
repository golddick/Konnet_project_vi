'use client'

import React from 'react'
import { useChatSiderbar } from '@/store/use-sideBar'
import { cn } from '@/lib/utils'
import RegToggle from '@/components/Recommended/_component/RegToggle'
import StreamChat from './StreamChat'
import ThumbnailCard from '@/components/StreamHome/ThumbnailCard'
import VideoCard from './VideoCard'
import { MobileChatBox } from './MobileChatBox'
import StreamDetails from './StreamDetails'
import { Wrapper } from '@/lib/wrapper'



  
  
  interface StreamItemProps  {
    stream : {
    }[]
  }
  
  

const StreamInfo = ({stream}:StreamItemProps) => {

    const {collapsed} = useChatSiderbar((state) => state)

    const linkImg = 'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg'
  return (

    <>



<div className={cn(' grid  grid-cols-1 lg:grid   lg:grid-cols-[2fr_0.5fr]  md:grid md:grid-cols-[2fr_1fr] relative', collapsed && 'lg:grid-cols-1  max-w-[1500px] md:grid-cols-1' )} >

{
      collapsed && ( 
        <div className=' hidden  md:block lg:block fixed lg:top-[10px] md:top-[100px] bg-black rounded-sm right-2 z-50 lg:absolute '>
          <RegToggle/>
        </div>
      )
    }
    
    <div className="  space-y-4 col-span-1  w-full  lg:overflow-y-auto hidden-scrollbar">
      <VideoCard img={linkImg} isLive={true}/>
      <div className='flex md:hidden lg:hidden px-4'>
        <MobileChatBox/>
      </div>

        <StreamDetails/>
    
    </div>
    <div className={cn('col-span-1 w-full  h-full  hidden   md:block  ', collapsed && 'hidden  md:hidden', !collapsed && 'lg:block ') }>
        <StreamChat/>
    </div>
</div>
    
    </>

  )
}

export default StreamInfo



