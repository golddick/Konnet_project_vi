

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function PuchaseBtn() {
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
      <div className="mr-auto border-[#b28228] border-b-2 hover:border-l-2   rounded-sm w-[150px]">
        <Button
            type="submit"
            variant="goldBTN"
            size='sm'
            disabled={false}
            >
                Get Live Ticket
            </Button>
            </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader> 
       <div className="flex w-full items-center justify-between">
       <AlertDialogTitle className="goldText ">Get both ur LIVE & STREAM access </AlertDialogTitle>

      <AlertDialogCancel>
        <X/>
      </AlertDialogCancel>
       </div>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex  w-full ">
       
          <AlertDialogAction className="flex  w-full justify-between gap-5" >
          <div className="mr-auto border-[#b28228] border-b-2 hover:border-l-2   rounded-sm w-auto">
        <Button
            type="submit"
            variant="goldBTN"
            size='sm'
            disabled={false}
            >
               Get LIVE Ticket
            </Button>
            </div>
          
          
         
          {/* </AlertDialogAction> */}
       
          {/* <AlertDialogAction> */}
          <div className="mr-auto border-[#b28228] border-b-2 hover:border-l-2   rounded-sm w-auto">
        <Button
            type="submit"
            variant="goldBTN"
            size='sm'
            disabled={false}
            >
                STREAM Access
            </Button>
            </div>
          
          
         
          </AlertDialogAction>

         
        
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
