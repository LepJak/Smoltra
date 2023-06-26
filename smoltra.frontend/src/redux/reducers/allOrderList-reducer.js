import { orderApi } from "../../api/api";

const SET_ALL_ORDERS = "SET_ALL_ORDERS";

let initialState = {
    allOrdersPage: {
        orders: []
    }

};

export const allOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_ORDERS: {
            return {
                ...state,
                allOrdersPage: {
                    orders: [...action.orders]
                }
            }
        }
        default:
            return state;
    }
}

const setAllOrders = (orders) => ({ type: SET_ALL_ORDERS, orders })

export const getOrders = () => {
    return (dispatch) => {
        orderApi.getAllOrders()
            .then(data => {
                dispatch(setAllOrders(data.orders));
                console.log(data)
            });
    }
}