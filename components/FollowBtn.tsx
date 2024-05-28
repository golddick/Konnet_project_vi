import React from 'react'
import { Button } from './ui/button'

const FollowBtn = () => {
  return (
    <div className="mr-auto border-[#b28228] border-b-2 hover:border-l-2   rounded-sm w-[150px]">
    <Button
    type="submit"
    variant="goldBTN"
    size='sm'
    disabled={false}
    >
        Follow Channel
    </Button>
    </div>
  )
}

export default FollowBtn