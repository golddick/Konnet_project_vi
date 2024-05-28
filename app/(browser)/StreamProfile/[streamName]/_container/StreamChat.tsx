'use client'

import React, { useEffect } from 'react'
import {useMediaQuery} from 'usehooks-ts'
import { useChatSiderbar } from '@/store/use-sideBar'
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'


const StreamChat = () => {

    const matches = useMediaQuery('(max-width: 500px)')
    // const matches = useMediaQuery('(max-width: 500px)')
    const {variant, onExpand} = useChatSiderbar((state) => state)

    useEffect(() => {
        if (matches) {
            onExpand()
        }
    },[matches, onExpand])

  return (
    <div className='flex  flex-col h-[calc(100vh-100px)] border-[#b28228] border-1 border-l pt-0 w-[100%]  px-2'>
        <ChatHeader/>
        <ChatBox/>
    </div>
  )
}

export default StreamChat