import { Button } from '@/components/ui/button'
import React from 'react'

const PuchaseBtn = () => {
  return (
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
  )
}

export default PuchaseBtn