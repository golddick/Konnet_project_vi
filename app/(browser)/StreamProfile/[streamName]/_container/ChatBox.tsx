import React from 'react'
import ChatForm from './ChatForm'
import MessagesBox from './MessagesBox'


const ChatBox = () => {
  return (
    <div className='flex flex-col  lg:mb-5   justify-between  max-h-[400px] h-[300px] lg:h-full lg:max-h-full md:max-h-full md:h-full'>
        <MessagesBox/>
        <ChatForm/>
    </div>
  )
}

export default ChatBox