

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import Logo from '../../../public/assets/logo-white.png'
import { ModeToggle } from './_component/ThemeBtn/ThemeBtn'
import { SquareDashedKanban } from 'lucide-react'
import SideDot from './_component/threedot/SideDot'
import UserIcon from './_component/userIcon/UserIcon'
import Search from './_component/Search/Search';


const AuthNav = () => {
  const isLoggedIN = false
  return (
<div className='flex h-14 w-full items-center bg-black  border-[#b28228] border-b-2 p-4 fixed z-50  gap-4 grid-cols-3 justify-between  flex-1'>
{/* left */}
    <div className='flex grow items-center justify-start overflow-hidden w-full'>
     <div>
     <Link href='/'>
        <Image
        src={Logo}
        alt='Logo'
        height='50'
        width='50'
        />
      </Link>

     </div>
    </div>
{/* center */}
{/* <div className='w-full flex items-start hidden lg:block md:block group-[3]:'>
  <Search/>
</div> */}


{/*  right */}
<div className=' w-full flex justify-end items-center  gap-2 lg:gap-8 flex-2'>
  <ModeToggle />

    <div className='flex items-center gap-2 lg:8 md:5'>
    <SideDot isLoggedIN={isLoggedIN} />
    </div>
  
</div>
</div>

  )
}

export default AuthNav