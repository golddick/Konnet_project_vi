import Nav from '@/components/Navbar/Nav'
import React from 'react'
import { DashBoardContainer } from './Container'
import { Toaster } from 'sonner'
import { Wrapper } from '@/lib/wrapper'



const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <Nav/>
        <div className="flex  pt-20  w-full " >
          <DashBoardContainer>
          <Toaster theme="light" position="bottom-center"/>
          {/* <Wrapper> */}

        {children}
          {/* </Wrapper> */}
          </DashBoardContainer>
    </div>
    </div>
  )
}

export default layout 