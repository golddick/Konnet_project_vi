


import React, { PureComponent } from 'react';

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import AnalyticsChart from './Analystics';





export function Analystic() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="goldBTN" size='lg' className='Container'>Analytics</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-auto lg:h-auto">
        <div className="mx-auto w-full lg:w-[800px] max-w-lg  h-full">

          <DrawerHeader>
            <DrawerTitle>Stream Analytics</DrawerTitle>
            <DrawerDescription>hmmmmm.</DrawerDescription>
            <div className='Container flex items-center justify-between w-full '>
            <div className='flex items-center gap-2 lg:gap-4 text-[#8884d8]'><span>Total View's:  </span><p>20</p></div>
            <div className='flex items-center gap-2 lg:gap-4 text-[#82ca9d]'><span>Total Amount gain:  </span> <p>20</p></div>
         </div>
          </DrawerHeader>

    
         <div className="h-[250px] lg:h-[600px] w-full">
         <AnalyticsChart/>
         </div>
          <DrawerFooter>
            <Button>Request settlement</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

