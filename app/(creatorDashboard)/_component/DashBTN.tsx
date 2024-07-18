"use client"
 
 


import { Copy, SquareDashedKanban } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




 
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })




import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function DashBTN() {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          pin: "",
        },
      })

      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    

    const isLoggedIN = true
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">

{
  isLoggedIN && (
    
    // <Link href='/Dashboard'>
        <div className='flex gap-2  items-center cursor-pointer'>
    <SquareDashedKanban  className='flex goldText'/>
    <p className=' goldText hidden lg:block md:block'> Dashboard</p>
    </div>
    //   {/* </Link> */}
  )
}
</Button>
      </DialogTrigger>
      <DialogContent className="w-[300px] md:w-full lg:w-full">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="w-full justify-center flex  flex-col items-center">
              <FormLabel><p className="goldText font-semibold" style={{fontFamily:'revert', fontSize:'12px'}}>Verify Email</p></FormLabel>
              <FormControl>

                <InputOTP maxLength={4} >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    </InputOTP>

              </FormControl>
              <FormDescription>
             <div className="flex flex-col gap-4 items-center justify-center">
             <p className="w-full text-center ">
               A verification code has been sent to your mail
               </p>
               <p className="w-full text-center goldText">   
                <i>If user didn't receive any code user should check there email in 
                    the setting section and make corrections if needed</i></p>
             </div>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

            <Link href='/Dashboard/kulture stream'>
        <div className=" border-[#b28228] border-l-2  rounded-sm w-[100px] items-center ml-auto">
        <Button type="submit" variant="goldBTN" size='sm' className="">Submit</Button>
    </div>
            </Link>
      </form>
    </Form>
      </DialogContent>
    </Dialog>
  )
}
