import { UserManager } from 'oidc-client';
import { getUser } from '../redux/reducers/auth-reducer';
import { storeUserError } from '../redux/reducers/auth-reducer';


const config = {
  // the URL of our identity server
  authority: "https://localhost:44386/",
  // this ID maps to the client ID in the identity client configuration
  client_id: "smoltraFrontend",
  // URL to redirect to after login
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: 'code',
  // the scopes or resources we would like access to
  scope: "openid profile SmoltraBackend",
  // URL to redirect to after logout
  post_logout_redirect_uri: "http://localhost:3000/signout-oidc",
  accessTokenExpiringNotificationTime: 1000,
};

const userManager = new UserManager(config)

export async function loadUser() {
  if (window.location.href.includes('code')) { // without this if condition I am getting an error saying no state in response. not sure if there is a better way.
    userManager.signinRedirectCallback();
  }
  const user = await userManager.getUser();
  console.log('User: ', user);
  const token = user?.access_token;
  // setAuthHeader(token);
}

export async function loadUserFromStorage(store) {
  try {
    if (window.location.href.includes('code')) { // without this if condition I am getting an error saying no state in response. not sure if there is a better way.
      userManager.signinRedirectCallback();
    }
    console.log(`loadUser`)
    const user = await userManager.getUser();
    if (!user) { return store.dispatch(storeUserError()) }
    store.dispatch(getUser(user))
  } catch (e) {
    console.error(`User not found: ${e}`)
    store.dispatch(storeUserError())
  }
}

export function signinRedirect() {
  return userManager.signinRedirect()
}
export function signinSilent() {
  return userManager.signinSilent()
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirect()
}

export function signoutRedirectCallback() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirectCallback()
}

export default userManager