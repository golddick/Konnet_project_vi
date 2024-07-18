import React from 'react'
import { CreatorDashboardContainer } from './Container'
import { Toaster } from 'sonner'
import { DashBoardWrapper } from './DashBoardWrapper'
import CreatorDashNav from './_component/Navbar/Nav'
import DashSideBar from './DashboardSideBar/DashSideBar'



const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <main>
        <CreatorDashNav/>
        <div className="flex w-full h-[100vh] pt-20 " >
            <DashSideBar/>
          <CreatorDashboardContainer>
          <Toaster theme="light" position="bottom-center"/>
        {children}
          </CreatorDashboardContainer>
    </div>
    </main>
  )
}

export default layout 