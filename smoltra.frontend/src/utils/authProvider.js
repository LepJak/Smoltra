import React, { useEffect, useRef } from 'react';
import { getUser } from '../redux/reducers/auth-reducer';
import { setAuthHeader } from './axiosHeaders';
import { signinRedirect, signinRedirectCallback, signinSilent } from '../services/userService';

export default function AuthProvider({ userManager: manager, store, children }) {

  let userManager = useRef();

  useEffect(() => {
    userManager.current = manager

    const onUserLoaded = (user) => {
      console.log(`user loaded: ${user}`)
      store.dispatch(getUser(user))
    }

    const onUserUnloaded = () => {
      setAuthHeader(null)
      console.log(`user unloaded`)
    }

    const onAccessTokenExpiring = () => {
      signinSilent()
      console.log(`user token expiring`)
    }

    const onAccessTokenExpired = () => {
      //signinRedirectCallback()
      console.log(`user token expired`)
    }

    const onUserSignedOut = () => {
      console.log(`user signed out`)
    }

    // events for user
    userManager.current.events.addUserLoaded(onUserLoaded)
    userManager.current.events.addUserUnloaded(onUserUnloaded)
    userManager.current.events.addAccessTokenExpiring(onAccessTokenExpiring)
    userManager.current.events.addAccessTokenExpired(onAccessTokenExpired)
    userManager.current.events.addUserSignedOut(onUserSignedOut)

    // Specify how to clean up after this effect:
    return function cleanup() {
      userManager.current.events.removeUserLoaded(onUserLoaded);
      userManager.current.events.removeUserUnloaded(onUserUnloaded);
      userManager.current.events.removeAccessTokenExpiring(onAccessTokenExpiring)
      userManager.current.events.removeAccessTokenExpired(onAccessTokenExpired)
      userManager.current.events.removeUserSignedOut(onUserSignedOut)
    };
  }, [manager, store]);

  return (
    React.Children.only(children)
  )
}