import React from 'react'
import { Button } from '../ui/button'
import VerifiedMark from '../VerifiedMark'
import FollowBtn from '../FollowBtn'
import EditBtn from '@/app/(browser)/StreamProfile/[streamName]/_container/EditBtn'
import UserEditBtn from '@/app/(creatorDashboard)/_component/EditBtn'
import { Analystic } from '../Analytic/Analystic'

const ContactInfo = () => {
    const admin = true
  return (
    <section className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3  justify-between  w-full Container gap-4 box-border'>

    <div className='flex flex-col gap-2 '>  
    <div className='flex items-center gap-4' >
       <p>De Culture </p>
      <VerifiedMark/>
    </div>
    <div>
   <p className='flex truncate  '>DeKulture@gmail.com</p>
    </div>
     
       </div>

       <div className='flex  text-center items-center gap-4   text-white'>
       <div>
           <span>Stream's</span>
           <p>200</p>
       </div>
       <div>
           <span>Subscribers</span> 
           <p>200</p>
       </div>
       <div>
           <span>Subscribers</span> 
           <p>200</p>
       </div>
       </div>

       <div className='flex items-center gap-2 w-full  justify-evenly'>
       
        {
          admin ? (
            // <div><Analystic/></div>
            <div>Ana </div>
          ):(
            <FollowBtn/>
          )
        }
         {
           admin && (
            <UserEditBtn/>
           )
      
        
         }
       
       </div>
      </section>
  )
}

export default ContactInfo