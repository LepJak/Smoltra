import { orderApi } from "../../api/api";

const SET_ORDERS = "SET_ORDERS";

let initialState = {
    myOrdersPage: {
        orders: []
    }

};

export const myOrderListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS: {
            return {
                ...state,
                myOrdersPage: {
                    orders: [...action.orders]
                }
            }
        }
        default:
            return state;
    }
}

const setOrders = (orders) => ({ type: SET_ORDERS, orders })

export const getOrders = () => {
    return (dispatch) => {
        orderApi.getOrders()
            .then(data => {
                dispatch(setOrders(data.orders));
            });
    }
}