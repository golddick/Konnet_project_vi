import React from 'react'
import AuthNav from './AuthNav/Nav'
import BG from '../../public/assets/bg-2.png'


const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
    <AuthNav />
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center " >
        {children}
    </div>
    </>
  )
}

export default layout 