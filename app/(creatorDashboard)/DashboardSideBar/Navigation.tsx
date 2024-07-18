'use client'

import { usePathname } from "next/navigation"
import { Fullscreen, KeyRound, MessagesSquare, User } from "lucide-react"
import DashNavItem, { DashNavItemSkeleton } from "./DashNavItem"


const DashboardNavigation = () => {

    const pathname = usePathname()





    const routes = [
        {
            id:1,
            label:'Stream',
            // href:`/u/${user?.username}`,
            href:  '/Dashboard',
            icon: Fullscreen
        },
        {
            id:2,
            label:'Key',
            // href: username ? `/u/${username}/keys` : '/',
            href:  '/',
            icon: KeyRound
        },
        {
            id:3,
            label:'Chat',
            // href: username ? `/u/${username}/Chat` : '/',
            href:  '/',
            icon: MessagesSquare
        },
        {
            id:4,
            label:'Community',
            // href: username ? `/u/${username}/Community` : '/',
            href:  '/',
            icon: User
        },
    ]


  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0"> 
        {
            routes.map((route) =>(
              <DashNavItem
              key={route.id}
              label={route.label}
              icon={route.icon}
              href={route.href}
              isActive={pathname === route.href}
              />
            ))
        }
    </ul>
  )
}

export default DashboardNavigation

