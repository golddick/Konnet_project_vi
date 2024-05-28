'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { RegFormSchema, loginFormSchema } from '@/lib/validator'
import React from 'react'
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
import { Input } from "@/components/ui/input"
import { loginFormDefaultValues } from "@/lib/connstants/indext"
import { useRouter } from "next/navigation"
import { CheckboxWithText } from "@/components/checkBox/Checkbox"
import Link from "next/link"
// import { Checkbox } from "@/components/ui/checkbox"






const RegisterPage = () => {
      // 1. Define your form.
      const form = useForm<z.infer<typeof RegFormSchema>>({
        resolver: zodResolver(RegFormSchema),
        // defaultValues:initialValues
      })

      const onSubmit = async (values: z.infer<typeof RegFormSchema>) => {
        console.log(values); 

      };
    
     
  return (


    <div className="flex items-center justify-center w-full h-[100vh]">

<Form {...form}>
      <form className="flex flex-col gap-4  justify-center" onSubmit={form.handleSubmit(onSubmit)} >

        <div className="flex flex-col gap-4 md:flex-row lg:flex-col">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-[300px] items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" 6ixx@gmail.com" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem className="w-full">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Display Name</i></FormLabel>
              <FormControl>
              <div  className='flex  w-[300px] items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" 6ixx" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
            <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Password</i></FormLabel>
              <FormControl >
                <div  className='flex  w-[300px] items-center bg-black  border-[#b28228] border-r-2  border-l-2 relative  rounded-sm'>

                <Input placeholder="*****" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

          />

        </div>

          <div className="flex flex-col gap-4 mt-5 lg:mt-10">
        <CheckboxWithText/>
        
          </div>
   
    
       
       <div className="w-full flex items-end  justify-end mt-10  relative ">
       <div  className='flex  items-center justify-center bg-black  border-[#b28228] border-b-2  rounded-sm w-[100px]'>
       <Button 
        type="submit"
        size='lg'
        variant='goldBTN'
        // className="button col-span-2  w-[100px] "
        >
        {
            form.formState.isSubmitting? ('submitting...'): ` Register`
        }
        </Button>
</div>
      
       </div>
      </form>
    </Form>
    </div>

  

  )
}

export default RegisterPage



