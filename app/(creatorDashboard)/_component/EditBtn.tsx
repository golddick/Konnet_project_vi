'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const UserEditBtn = () => {

  return (
  
    <Dialog>
  <DialogTrigger>                     
    <div className={` border-[#b28228] border-b-2 hover:border-l-2 rounded-sm w-[100px] `}>
            <Button
            type="submit"
            variant="goldBTN"
            size='sm'
            disabled={false}
            >
                Edit
            </Button>
            </div></DialogTrigger>
  <DialogContent>
    <form >
    <div className="space-y-2">
            <Label>
                Name
            </Label>
            <Input
            placeholder="Stream Name"
            // onChange={onChange}
            // value={name}
            disabled={false}
            />
        </div>
    </form>
  
  </DialogContent>
</Dialog>

  )
}

export default UserEditBtn