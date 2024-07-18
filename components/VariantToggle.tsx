'use client'

import { ArrowLeftFromLine, ArrowRightFromLine, MessagesSquare, User, Users } from "lucide-react"
// import { Hint } from "@/components/hint"
import { Hint } from "@/Hint/Hint"
import { Button } from "@/components/ui/button"

import { useChatSiderbar, ChatVariant,  } from "@/store/use-sideBar"
import { CreatorChatVariant, CreatorUserChatSiderbar } from "@/store/use-chat-sidebar"



const VariantToggle = () => {
    const {variant, onChangeVariant} = CreatorUserChatSiderbar((state) => state)
    const IsStream = variant === CreatorChatVariant.STREAM
    const Icon = IsStream ? Users : MessagesSquare;

    const onToggle = () => {
       const newVariant = IsStream ? CreatorChatVariant.COMMUNITY : CreatorChatVariant.STREAM;
       onChangeVariant(newVariant)
    }

    const label = IsStream ? "Community" : "Create a STREAM"

  return (
    <Hint label={label} side="bottom" asChild>
        <Button onClick={onToggle} variant='ghost' className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent">
            <Icon className="h-4 w-4"/>
        </Button>
    </Hint>
  )
}

export default VariantToggle