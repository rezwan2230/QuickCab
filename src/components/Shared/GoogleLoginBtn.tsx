"use client"

import { Button } from "@heroui/react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleLoginBtn = () => {
  const searchParams = useSearchParams()
  const redirect = searchParams?.get("redirect");

  return (
    <div>
        <Button onClick={()=>signIn("google",{callbackUrl: redirect ? redirect : "/"})}>Login with Google</Button>
    </div>
  )
}

export default GoogleLoginBtn