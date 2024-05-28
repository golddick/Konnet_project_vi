import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import ReactionBTN from './ReactionBTN'

const ChatForm = () => {
  return (
    <form onSubmit={(() => {})}  className="flex flex-col items-center  rounded-sm">

    <div className="w-full gap-2 items-center flex justify-between border-[#b28228] border-l-2  rounded-sm" >

        <Input 
    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " 
    placeholder="Search"/>
    <ReactionBTN/>
    </div>
    <div className="ml-auto border-[#b28228] border-b-2  rounded-sm">
      <Button
      type="submit"
      variant="goldBTN"
      size='sm'
      disabled={false}
      >
          Chat
      </Button>
    </div>


  </form>
  )
}

export default ChatForm

