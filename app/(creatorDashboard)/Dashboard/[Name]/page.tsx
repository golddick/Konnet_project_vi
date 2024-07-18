'use client'

import React from 'react'
import Dashome from '../../_component/DashBoardHome/Dashome'
import { useCreatorSidebar } from '@/store/use-sidebar-creator'
import RegToggle from '@/components/Recommended/_component/RegToggle'


const page = () => {
  const {collapsed} = useCreatorSidebar((state) => state)
  return (
    <div className='h-full '>
   
      <Dashome/>
    </div>
  )
}

export default page