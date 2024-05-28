import { Button } from '@/components/ui/button'
import React from 'react'
import {doLogin} from '@/app/actions/Auth/Auth'

const LoginForm = () => {
  return (
    <form action={doLogin}>
        <Button type='submit' name='action' value='google' className='bg-pink-400 text-black  rounded-md m-1 text-lg'>
            Sign in with google 
        </Button>
        <Button type='submit' name='action' value='github' className='bg-red-400 text-black  rounded-md m-1 text-lg'>
            Sign in with github 
        </Button>
        
    </form>
  )
}

export default LoginForm