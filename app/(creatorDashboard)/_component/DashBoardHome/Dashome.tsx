'use client'


import CreateStream from '@/components/CreateStream/CreateStream'
import RegToggle from '@/components/Recommended/_component/RegToggle'
import { cn } from '@/lib/utils'
import { useChatSiderbar } from '@/store/use-sideBar'
import { useCreatorSidebar } from '@/store/use-sidebar-creator'
import UserProfile from '../UserProfile/UserProfile'



const Dashome = () => {
    const {collapsed} = useChatSiderbar((state) => state)
  return (
    <>



<div className={cn(' h-[100vh] grid-cols-1 lg:grid    lg:grid-cols-[2fr_1fr]    md:grid md:grid-cols-[2fr_1fr] relative', collapsed && 'lg:grid-cols-1  md:grid-cols-1' )} >

{
      collapsed && ( 
        <div className=' hidden  md:block lg:block fixed lg:top-[10px] md:top-[100px] bg-black rounded-sm right-2 z-50 lg:absolute '>
          <RegToggle/>
        </div>
      )
    }

    <div className="  overflow-scroll hidden-scrollbar  w-full ">
    
    <UserProfile/>
    </div>
      <div className={cn(' col-span-1 w-full border-[#b28228]  border-l  hidden   md:block  ', collapsed && 'hidden  md:hidden', !collapsed && 'lg:block ') }>
        <CreateStream/>
    </div>
</div>


    </>
  )
}

export default Dashome