
import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'

const StreamChat = () => {
  return (
    <div className=' flex flex-col h-full  justify-between'>
        <ChatHeader/>
        <ChatBox/>
    </div>
  )
}

export default StreamChat