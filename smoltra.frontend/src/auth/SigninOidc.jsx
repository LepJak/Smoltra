import React, { useEffect } from 'react'
import { signinRedirect, signinRedirectCallback } from '../services/userService'
import { Navigate, useNavigate } from 'react-router-dom'

function SigninOidc() {
  const navigate = useNavigate()
  useEffect(() => {
    async function signinAsync() {
      signinRedirectCallback()
      navigate('/');
    }
    signinAsync()
  }, [navigate])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default SigninOidc