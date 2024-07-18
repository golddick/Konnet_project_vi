'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LiveBadge from '@/components/StreamHome/LiveBadge'
import FullScreenControl from './SreamControls/Contorls/FullScreenControl'
import { useEventListener } from 'usehooks-ts'
import VolumeControl from './SreamControls/Contorls/VolumeControl'
import { DonutIcon, DotIcon, EyeIcon, Heart, MessageCircleMoreIcon, ShareIcon } from 'lucide-react'
import SideDot from '@/app/(auth)/AuthNav/_component/threedot/SideDot'
import StreamSideDot from './SreamControls/StreamSideDot'
import { Analystic } from '@/components/Analytic/Analystic'

interface ThumbnailCardProps {
    isLive: boolean
    img:string 
}

const VideoCard = ({isLive, img}:ThumbnailCardProps) => {
  // console.log(img)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isFullScreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(0)


  const toggleFullscreen = () => {
    if (isFullScreen) {
        document.exitFullscreen()
        // setIsFullscreen(false);
    }else if(wrapperRef?.current){
        wrapperRef.current.requestFullscreen()
        // setIsFullscreen(true)
    }
}

   //to listing to the changing of screen size 

   const haandleFullscreenChange = () => {
    const isCurrentylFullscreen = document.fullscreenElement !== null;
    setIsFullscreen(isCurrentylFullscreen)
}
useEventListener('fullscreenchange', haandleFullscreenChange, wrapperRef); 


const onVolumeChange = (value: number) => {
  setVolume(+value);

  if (videoRef?.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value * 0.01;
  }
}

const toggleMute = () => {
  const isMuted = volume === 0
  setVolume(isMuted ? 50 : 0)

  if (videoRef?.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0
  }
}

useEffect(() => {
  onVolumeChange(0)
}, [])


const isAdmin = true

  return (
 <div className='flex flex-col gap-4'>
          <div className=' h-[300px] lg:h-[500px] md:h-[400px] w-full  cursor-pointer relative rounded-md ' ref={wrapperRef}>
          <Image
                  src={img}
                  fill
                  alt='Thumbnail'
                  className='object-cover'

                  />
        {isLive && (
                  <div className='absolute top-4 left-2 '>
                      <LiveBadge/>
                  </div>
              )}
      </div>

<div className='flex flex-col md:flex-row lg:flex-row w-full justify-between items-center  gap-2'>

    <div className='flex w-full items-center justify-between gap-4 p-4 '>
      <div className='flex items-center gap-4'>
      <FullScreenControl  isFullScreen={isFullScreen} onToggle={toggleFullscreen}   />
      <VolumeControl  onChange={onVolumeChange} value={volume} onToggle={toggleMute}/>
      </div>

        {
          isAdmin && (
            <Analystic/>
          )
        }

    </div>

<div className='flex w-full gap-6 justify-between items-center p-4'>


      <div className='flex items-start gap-4'> 
        
        <div className='flex gap-2 items-center Container cursor-pointer'> 
          <EyeIcon/>
          <span>2</span>
        </div>

        <div className='flex gap-2 items-center Container cursor-pointer'> 
          <MessageCircleMoreIcon/>
          <span>2</span>
        </div>

        <div className='flex gap-2 items-center Container cursor-pointer'> 
          <Heart/>
          <span>24</span>
        </div>

        </div>

        <div>
          <StreamSideDot/>
        </div>
</div>
</div>
 </div>
  )
}

export default VideoCard