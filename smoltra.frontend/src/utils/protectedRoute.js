import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

function Protected({ children, component: Component, ...rest }) {
  const user = useSelector(state => (state.authReducer.auth?.user));
    console.log(user)
 
  return(<Route component ={<Component {...rest}/>}/> );
   //: (<Route component = {<Navigate to="/login" />}/>)
}

export default Protected