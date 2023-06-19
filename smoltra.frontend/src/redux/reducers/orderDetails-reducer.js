import { orderApi } from "../../api/api";

const SET_ORDER = "SET_ORDER";

let initialState = {
    orderDetailsPage:{
        order: {
            orderId: null,
            totalPrice: 0,
            state: 0,
            created: null,
            ordersItems: []
        }
    }

};

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER: {
            return {
                ...state,
                orderDetailsPage:{
                    order: action.order
                }
            }
        }
        default:
            return state;
    }
}

const setOrder = (order) => ({ type: SET_ORDER, order })

export const getOrder = (id) => {
    return (dispatch) => {
        orderApi.getOrder(id)
            .then(data => {
                dispatch(setOrder(data));
            });
    }
}