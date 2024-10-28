import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


function Login() {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <Card className="h-[450px] w-[400px] bg-[rgb(28, 25, 23)]">
        <CardHeader>
          <CardTitle className="text-white text-4xl">Login</CardTitle>
          <CardDescription className="text-md">Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="email" placeholder="M@gmail.com"></Input>
          <Button variant={"destructive"} className="w-full"> Login</Button>
        </CardContent>

        <CardFooter>
          <p>FOrgot Password</p>
          <p>Need your account</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login