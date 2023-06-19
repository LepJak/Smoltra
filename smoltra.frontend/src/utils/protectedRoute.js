import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

function Protected({ children, component: Component, ...routeProps}) {
  const user = useSelector(state => state?.auth?.user)

  return user
    ? (<Fragment>
      <Component {...routeProps} />
    </Fragment>)
    : (<Navigate to="/login" />)
}

export default Protected