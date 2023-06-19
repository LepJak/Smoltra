import { setAuthHeader } from "../../utils/axiosHeaders";

const SET_USER = "SET_USER";
const USER_SIGNED_OUT = "USER_SIGNED_OUT"
const USER_EXPIRED = "USER_EXPIRED"
const STORE_USER_ERROR = "STORE_USER_ERROR"
const LOADING_USER = "LOADING_USER"

let initialState = {
    productsPage: {
        products: [],       
    }
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                auth:{
                    user: action.user
                }
            }
        }
        default:
            return state;
    }

}

export const setUser = (user) => ({ type: SET_USER, user })
export const loadingUser = () => ({ type: LOADING_USER})
export const storeUserError = () => ({ type: STORE_USER_ERROR})
export const userExpired = () => ({ type: USER_EXPIRED})
export const userSignedOut = () => ({ type: USER_SIGNED_OUT})

export const getUser = (user) =>(dispatch) =>{
    setAuthHeader(user.access_token)
    console.log(user)
    dispatch(setUser(user));
}