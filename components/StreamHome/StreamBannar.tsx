import Image from 'next/image'
import React from 'react'
import IMG from '../../public/assets/woman.jpeg'

const StreamBannar = () => {
  return (
    <div className='w-full h-[200px] lg:h-[400px] bg-gray-600'>
        <Image
          src={IMG}
        //   fill
          alt='Thumbnail'
          className='h-[100%] w-full c object-cover'

        >

        </Image>
{/* <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/nav55-4ISg4"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe> */}

    </div>
  )
}

export default StreamBannar