'use client'

import { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import Img from '@/public/assets/woman.jpeg'
import 'swiper/css';
import { cn } from '@/lib/utils';
import { TestImg } from './TestImg';
import { Button } from '@/components/ui/button';


import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';


export default function StreamGallery() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null); // explicitly typing swiper state

  const [showNavigation, setShowNavigation] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='relative  h-full w-full text-white  mb-5'>
      <div className='container'>
        {/* <div className='my-10'>
          <button onClick={() => setShowNavigation(open => !open)}>
            View All
          </button>
        </div> */}

        <div className="mr-auto border-[#b28228] my-10 border-b-2 hover:border-l-2   rounded-sm w-[200px]">
            <Button
            type="submit"
            variant="goldBTN"
            size='sm'
            onClick={() => setShowNavigation(open => !open)}
            disabled={false}
            >
               Explore Event Gallery
            </Button>
            </div>
        

        {/* navigation */}
        <nav className={cn('my-5 flex-wrap w-full', !showNavigation && 'hidden')}>
          <ul className='flex gap-4 flex-1 flex-wrap items-center'>
            {TestImg.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper?.slideTo(index);
                  }}
                  className='relative block h-20 w-20 overflow-hidden rounded-lg'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    objectFit='cover'
                    className='block h-full w-full object-cover'
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main slides */}
        <Swiper
          spaceBetween={5}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={(swiper: SwiperType) => setSwiper(swiper)} 
          className='h-96 w-full rounded-lg lg:w-[500px] lg:h-[500px]  md:w-[400px]'
          // className={cn( !showNavigation && 'hidden')}
        >
          {TestImg.map((image, index) => (
            <SwiperSlide key={index}>
              <div className=''>
                <Image
                   src={image.src}
                   alt={image.alt}
                    fill
                />
              </div>

          
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

