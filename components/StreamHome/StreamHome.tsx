import React from 'react'
import StreamBannar from './StreamBannar'
import Stream from './Stream'
import StreamHeader from './StreamHeader'


const StreamHome = () => {

  return (
    <div className='flex flex-col  h-full '>
         <h2><i className='text-[#b28228]' style={{fontSize:'12px', fontWeight:'500'}}>Live</i> </h2>
        <StreamBannar/>
        <StreamHeader/>
        <Stream/>
    </div>
  )
}

export default StreamHome