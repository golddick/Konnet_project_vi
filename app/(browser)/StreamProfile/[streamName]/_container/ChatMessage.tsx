import React from 'react'

interface ChatMessageProps {
    sender:boolean
}

const ChatMessage = ({sender}:ChatMessageProps) => {



  return (

<div className={`flex gap-2 p-2 rounded-md hover:bg-white/5`}>
<p className='text-sm text-white/40' style={{ fontSize: '12px' }}>
  10:12
</p>
<div className={`flex flex-wrap items-baseline gap-1 grow `}>
  <p className='text-sm font-semibold whitespace-nowrap'>
    <span className='truncate' style={{ color: 'red', fontSize: '13px' }}>
      kill
    </span>
  </p>
  <p className='text-sm break-all' style={{ fontSize: '13px' }}>frank how have you been</p>
</div>
</div>
  )
}

export default ChatMessage