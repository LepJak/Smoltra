import React, { useEffect } from 'react'
import { signoutRedirectCallback } from '../services/userService'
import {  useNavigate } from 'react-router-dom'

function SignoutOidc() {
  console.log("out")
  const navigate = useNavigate()
  useEffect(() => {
    
    async function signoutAsync() {
      await signoutRedirectCallback("/")
      navigate("/")
    }
    signoutAsync()
  }, [navigate])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default SignoutOidc