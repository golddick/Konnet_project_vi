import React from 'react'
import Image from 'next/image'
import LiveBadge from '@/components/StreamHome/LiveBadge'
import DashBoardUserIcon from './userIcon/UserIcon'

interface ThumbnailCardProps {
    isLive: boolean
    img:string 
}

const DashBoardVideoCard = ({isLive, img}:ThumbnailCardProps) => {
  console.log(img)
  return (
    // <div className=' h-[300px] lg:h-[500px] md:h-[400px] w-full group aspect-video relative rounded-md cursor-pointer'>
    <div className=' h-[200px] lg:h-[400px] md:h-[400px] w-full border-[#b28228] border-b-2  rounded-bl-[35px] lg:rounded-bl-[41px] overflow-hidden cursor-pointer relative '>
    <Image
            src={img}
            fill
            alt='Thumbnail'
            className='object-cover '

            />
  {isLive && (
            <div className='absolute top-4 left-2 '>
                <LiveBadge/>
            </div>
        )}
         <div className=' absolute bottom-0 left-0.5 lg:left-0'>
         <DashBoardUserIcon isLive isLoggedIN/>
         </div>
</div>
  )
}

export default DashBoardVideoCard