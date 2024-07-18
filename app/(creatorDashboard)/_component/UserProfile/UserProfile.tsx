import VideoCard from '@/app/(browser)/StreamProfile/[streamName]/_container/VideoCard'
import Image from 'next/image'
import React from 'react'
import DashBoardVideoCard from '../DashBoardVideoCard'
import UserIcon from '@/components/Navbar/_component/userIcon/UserIcon'
import VerifiedMark from '@/components/VerifiedMark'
import Stream from '@/components/StreamHome/Stream'
import AdsBanner from '@/components/AdsBanner/AdsBanner'
import { Button } from '@/components/ui/button'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
// import UserIcon from '../Navbar/_component/userIcon/UserIcon'

const UserProfile = () => {
    const img ='https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg'

   

  return (
    <>
        <div>
        <DashBoardVideoCard isLive={true} img={img} />
        </div>
        <div className=' flex flex-col space-y-2 p-2 mt-4 w-full '>

          <ContactInfo/>

         

          {/* <AdsBanner/> */}
           <section className='w-full'>
            <Stream/>
           </section>
        </div>
    </>
  )
}

export default UserProfile