import { setAuthHeader } from "../../utils/axiosHeaders";

const SET_USER = "SET_USER";
const USER_SIGNED_OUT = "USER_SIGNED_OUT"
const USER_EXPIRED = "USER_EXPIRED"
const STORE_USER_ERROR = "STORE_USER_ERROR"
const LOADING_USER = "LOADING_USER"
const SET_ROLE = "SET_ROLE"


let initialState = {
    auth: {
        user: null,  
        role:null     
    }
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                auth:{
                    ...state.auth,
                    user: action.user
                }
            }
        }
        case SET_ROLE: {
            console.log("setRole "+ action.role)
            return {
                ...state,
                auth:{
                    ...state.auth,
                    role: action.role 
                }
            }
        }
        default:
            return state;
    }

}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
export const setUser = (user) => ({ type: SET_USER, user })
export const setRole = (role) => ({ type: SET_ROLE, role })
export const loadingUser = () => ({ type: LOADING_USER})
export const storeUserError = () => ({ type: STORE_USER_ERROR})
export const userExpired = () => ({ type: USER_EXPIRED})
export const userSignedOut = () => ({ type: USER_SIGNED_OUT})

export const getUser = (user) =>(dispatch) =>{
    setAuthHeader(user.access_token)
    let role = parseJwt(user.access_token)?.role;
    dispatch(setRole(role));
    dispatch(setUser(user));
}