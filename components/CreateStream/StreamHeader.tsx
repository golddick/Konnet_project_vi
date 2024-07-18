import React from 'react'
import RegToggle from '../Recommended/_component/RegToggle'
import VariantToggle from '../VariantToggle'

const StreamHeader = () => {
  return (
    <>
    <div className=" items-center flex justify-between ">
        <RegToggle/>
        <p className="font-semibold text-[#b28228]">Create Stream</p>
        <div className="">
            <VariantToggle/>
        </div>

    </div>
    </>
 
  )
}

export default StreamHeader