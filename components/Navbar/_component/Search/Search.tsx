import React from 'react'
import { Input } from '../../../ui/input'
import { SearchIcon } from 'lucide-react'
import { Button } from '../../../ui/button'

const Search = () => {
  return (

    <form
    // className="relative w-full lg:w-[400px]  md:w-[300px] flex items-center bottom-2 border-[#b28228]"
    className='flex  w-[300px] items-center bg-black  border-[#b28228] border-r-2  relative  rounded-sm'
    >
        <Input 
         className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-l-sm border-none  " 
         placeholder="Search"/>

        <Button
        type="submit"
        size='sm'
        variant='link'>
            <SearchIcon className="h-5 w-5 text-muted-foreground"/>
        </Button>
    </form>

  )
}

export default Search