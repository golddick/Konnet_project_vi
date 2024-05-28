import React from 'react'
import Image from 'next/image'
import LiveBadge from '@/components/StreamHome/LiveBadge'

interface ThumbnailCardProps {
    isLive: boolean
    img:string 
}

const VideoCard = ({isLive, img}:ThumbnailCardProps) => {
  console.log(img)
  return (
    // <div className=' h-[300px] lg:h-[500px] md:h-[400px] w-full group aspect-video relative rounded-md cursor-pointer'>
    <div className=' h-[300px] lg:h-[500px] md:h-[400px] w-full  cursor-pointer relative rounded-md'>
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
  )
}

export default VideoCard