"use client"

import { Button } from "@heroui/react"
import { signIn } from "next-auth/react"

const GoogleLoginBtn = () => {
  return (
    <div>
        <Button onClick={()=>signIn("google",{callbackUrl: "http://localhost:3000"})}>Login with Google</Button>
    </div>
  )
}

export default GoogleLoginBtn