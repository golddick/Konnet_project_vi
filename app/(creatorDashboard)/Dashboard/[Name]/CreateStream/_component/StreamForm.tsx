
'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { RegFormSchema, CreateStreamSchema } from '@/lib/validator'
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






const StreamForm = () => {
      // 1. Define your form.
      const form = useForm<z.infer<typeof CreateStreamSchema>>({
        resolver: zodResolver(CreateStreamSchema),
        // defaultValues:initialValues
      })

      const onSubmit = async (values: z.infer<typeof CreateStreamSchema>) => {
        console.log(values); 

      };
    
     
  return (


    <div className="flex justify-center w-full h-[calc(100vh-100px)]">

<Form {...form}>
      <form className="flex flex-col gap-4  w-full p-4" onSubmit={form.handleSubmit(onSubmit)} >

       <div className="flex flex-col gap-6">

       <div className="w-full Container flex flex-col gap-4">
        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
        <div className="w-full Container flex flex-col gap-4">
          <h1>contact info</h1>
        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>


        <div className="w-full Container flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
          <h1>Stream Key</h1>
          <p>Generate</p>
          </div>
        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <div className="w-full Container flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
          <h1>Settlement Info</h1>
          <p>Verify</p>
          </div>
        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='StreamName'
          render={({ field }) => (
            <FormItem className="w-full ">
                 <FormLabel className=" flex font-sans  font-thin" style={{fontSize:'11px', fontWeight:'500', color:'#b28228'}}><i>Email</i></FormLabel>
              <FormControl>
              <div  className='flex  w-full items-center bg-black  border-[#b28228] border-r-2  border-l-2  relative  rounded-sm'>

            <Input placeholder=" max stream" {...field}   className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " />
            </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

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

export default StreamForm



