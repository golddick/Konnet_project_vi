'use client'

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react"
import { Hint } from "@/Hint/Hint"
import { Button } from "@/components/ui/button"
import { useChatSiderbar } from "@/store/use-sideBar"


const RegToggle = () => {

    const {collapsed,onCollapse,onExpand} = useChatSiderbar((state) => state)

    const   Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine

    const onToggle = () => {
        if (collapsed) {
            onExpand()
        }else{
            onCollapse()
        }
    }

    const Label = collapsed ? 'Expand' : 'Collapse'


  return (
    <Hint label={Label} side='left' align='center' asChild>
        <Button 
        onClick={onToggle}
        variant='ghost'
        className="h-auto p-2 hover:bg-white/10 hover:text-primary rounded-sm"
        >
            <Icon className="w-4 h-4 text-[#b28228]"/>
        </Button>
    </Hint>
  )
}

export default RegToggle