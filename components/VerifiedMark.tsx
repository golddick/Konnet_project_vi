import React from 'react'
import { Check } from 'lucide-react'

const VerifiedMark = () => {
  return (
    <div className=' flex items-center justify-center h-5  w-5 rounded-full goldbg'>
        <Check className='h-3 w-3 text-primary stroke-[4px]'/>
    </div>
  )
}

export default VerifiedMark