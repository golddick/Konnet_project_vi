
import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'

const StreamChat = () => {
  return (
    <div className=' flex flex-col h-[calc(100vh-80px)]  fixed justify-between'>
        <ChatHeader/>
        <ChatBox/>
    </div>
  )
}

export default StreamChat