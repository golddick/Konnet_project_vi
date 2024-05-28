'use client'

import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { useState, useTransition } from "react"
// import { updateStream  } from "@/actions/stream"
import { Skeleton } from "@/components/ui/skeleton"
import ChatBox from "./ChatBox"

type FieldTypes = 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly'

interface ToggleCardProps {
  label: string
  value: boolean
  field: FieldTypes
}

const ToggleMobileChatCard = ({field, label, value = false}: ToggleCardProps) => {

  const [isPending, startTransition] = useTransition()
  const [checked, setChecked] = useState(false);

// const showChat = true

  const onChange = () => {
 startTransition(() => {
//   const updatedValue = !showChat; 
//   updateStream({[field]: updatedValue})
setChecked(!checked);

console.log(checked)

//   .then(() => toast.success("chat settings updated"))
//   .catch(() => toast.error("something went wrong with the updated"))
 })
  }

  return (
    <div className="rounded-xl  ">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
        <Switch checked={checked} onCheckedChange={onChange} disabled={isPending}>
        {checked? 'On' : 'Off'}    
        </Switch>
      </div>
      </div>
     {
        checked === true && (
            <div className=" h-full">
            <ChatBox/>
          </div>
        )
     }
     
    </div>
  )
}

export default ToggleMobileChatCard


export const ToggleMobileChatCardSkeleton = () => {

  return(
    <Skeleton className="rounded-xl p-5 w-full"/>
  )
}