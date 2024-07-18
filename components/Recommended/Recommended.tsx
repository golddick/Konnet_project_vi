'use client'

import React, { useEffect } from 'react'
import {useMediaQuery} from 'usehooks-ts'
import { useChatSiderbar } from '@/store/use-sideBar'
import RecommendedHeader from './_component/RecommendedHeader'

const Recommended = () => {

    const matches = useMediaQuery('(max-width: 500px)')
    // const matches = useMediaQuery('(max-width: 500px)')
    const {variant, onExpand} = useChatSiderbar((state) => state)

    useEffect(() => {
        if (matches) {
            onExpand()
        }
    },[matches, onExpand])

  return (
    <div className=''>
        <RecommendedHeader/>
          <div>
           {/* <p className="font-semibold text-[#b28228] text-center "> h</p> */}

          </div>

      home
    </div>
  )
}

export default Recommended