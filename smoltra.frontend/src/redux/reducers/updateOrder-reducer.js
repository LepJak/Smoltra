import { orderApi } from "../../api/api";
import { getOrders } from "./allOrderList-reducer";

const SET_ORDER = "SET_ORDER";
const UPDATE_STATE = "UPDATE_STATE";

let initialState = {
    orderUpdatePage: {
        order: {
            orderId: null,
            totalPrice: 0,
            state: 0,
            created: null,
            ordersItems: []
        }
    }

};

export const orderUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER: {
            return {
                ...state,
                orderUpdatePage: {
                    order: action.order
                }
            }
        }
        case UPDATE_STATE: {
            return {
                ...state,
                orderUpdatePage: {
                    order: {
                        ...state.orderUpdatePage.order,
                        state: action.newState
                    }
                }
            }
        }
        default:
            return state;
    }
}

const setOrder = (order) => ({ type: SET_ORDER, order })
const updateState = (newState) => ({ type: UPDATE_STATE, newState })

export const updateOrderState = (state) => {
    return (dispatch) =>
        dispatch(updateState(state));
}

export const getOrder = (id) => {
    return (dispatch) => {
        orderApi.getOrder(id)
            .then(data => {
                dispatch(setOrder(data));
            });
    }
}
export const updateOrder = (id, state) => {
    return (dispatch) => {
        orderApi.updateOrderState(id, state)
            .then(data => {
                dispatch(getOrders);
            });
    }
}