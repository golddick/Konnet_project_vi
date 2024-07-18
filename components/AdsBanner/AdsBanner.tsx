'use client'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide , } from 'swiper/react';
import type { Swiper as SwiperType ,} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';


const AdsBanner = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const Ads = [
        {id: 1,
        AdsName:'Opay',
        AdsImg:'/assets/cokeImg.webp'
        },
        {id: 2,
        AdsName:'Youtube',
        AdsImg:'/assets/cokeImg.webp'
        },
        {id: 3,
        AdsName:'Omo',
        AdsImg:'/assets/cokeImg.webp'
        },
        {id: 4,
        AdsName:'KONNET',
        AdsImg:'/assets/img2.webp'
        },
        {id: 5,
        AdsName:'Brave Mack',
        AdsImg:'/assets/cokeImg.webp'
        },
        {id: 6,
        AdsName:'PayStack',
        },
    ]

  return (
    <div className='p-4 flex flex-col mt-5 w-full h-[50px] bg-black items-center justify-center'>
       
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(swiper: SwiperType) => setSwiper(swiper)}   
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }} 
        loop
        breakpoints={{ 
         
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            750: {
                slidesPerView: 4,
                spaceBetween: 40
            },
        }}
        className="  w-full m-auto h-full flex items-center justify-center"

       
      >
       {Ads.map((item) => (
         <SwiperSlide className='w-full  h-full flex items-center justify-center' key={item.id}>
        <Link href={`/Items`}>
            <p className=' font-mono goldText flex text-start  truncate  items-center w-full h-full'>{item.AdsName} .</p>
        </Link>
     </SwiperSlide>

       ))}
      </Swiper>
    </div>
  )
}

export default AdsBanner



