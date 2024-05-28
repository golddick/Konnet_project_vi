"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithText() {
  return (

    <div className="items-centers  flex w-full h-full gap-4">
      <Checkbox id="terms1" />
      <div className=" flex  ">
        <label
          htmlFor="terms1"
          className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground truncate max-w-[300px "
          style={{fontSize:'12px'}}
        >
          I agreed to the <i>Terms</i> & <i>Conditions</i>
        </label>
      </div>
    </div>
  )
}
