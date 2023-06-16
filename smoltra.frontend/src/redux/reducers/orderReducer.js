import { orderApi } from "../../api/api";

const SET_ORDERS = "SET_ORDERS";

let initialState = {
    orders: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS: {
            return {
                ...state,
                productsGuidFromCart: [...action.orders]
            }
        }
        default:
            return state;
    }
}

const setOrders = (orders) => ({ type: SET_ORDERS, orders })

export const getProductsInCart = () => {
    return (dispatch) => {
        orderApi.getOrders()
            .then(data => {
                dispatch(setOrders(data.orders));
            });
    }
}