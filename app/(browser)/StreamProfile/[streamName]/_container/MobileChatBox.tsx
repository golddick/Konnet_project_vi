'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import ToggleMobileChatCard from "./ToggleMobileChat"

export function MobileChatBox() {
  return (
    // <div className="flex items-center justify-between w-full space-x-2">
    //   <Label htmlFor="airplane-mode" className="text-[#b28228]" style={{fontSize:'12px'}}>Show Stream Chat</Label>
    //   <Switch id="airplane-mode" />
    // </div>
    <div className="w-full">
          <ToggleMobileChatCard
            field="isChatEnabled"
            label="Show Stream Chat"
            value= {false}
            />
    </div>
  )
}
