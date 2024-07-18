'use client'

import React, { useEffect } from 'react'
import StreamHeader from './StreamHeader'
import { CreatorChatVariant, CreatorUserChatSiderbar } from '@/store/use-chat-sidebar'
import StreamForm from '@/app/(creatorDashboard)/Dashboard/[Name]/CreateStream/_component/StreamForm'




const CreateStream = () => {

  const {variant, onExpand} = CreatorUserChatSiderbar((state) => state)

  return (
    <div className='h-full '>
      <StreamHeader/>

      {
            variant === CreatorChatVariant.STREAM && (
                <>
               <StreamForm/>
               </>
            )
        }
      {
            variant === CreatorChatVariant.COMMUNITY && (
                <>
               <div>community</div>
                </>
            )
        }
   
    </div>
  )
}

export default CreateStream