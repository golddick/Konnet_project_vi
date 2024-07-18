import Nav from '@/components/Navbar/Nav'
import React from 'react'
import { HomeContainer } from './Container'
import { Toaster } from 'sonner'
import { Wrapper } from '@/lib/wrapper'



const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <Nav/>
        <div className="flex w-full  pt-20 " >
          <HomeContainer>
          <Toaster theme="light" position="bottom-center"/>
        {children}
          </HomeContainer>
    </div>
    </div>
  )
}

export default layout 