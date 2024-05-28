import React from 'react'
import ChatMessage from './ChatMessage'
import { ScrollArea } from "@/components/ui/scroll-area"


const MessagesBox = () => {

    const sender = true
    const receiver = true
  return (       
    <ScrollArea className="h-full w-full flex flex-1 flex-col-reverse overflow-y-auto p-3 border-[#b28228] border-b-2 mb-4 rounded-sm">
                 <ChatMessage sender={false} /> {/* Receiver message */}
            <ChatMessage sender={true} /> 
    </ScrollArea>


  )
}

export default MessagesBox