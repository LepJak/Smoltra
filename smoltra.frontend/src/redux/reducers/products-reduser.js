import { cartApi } from '../../api/api';

let ADD_PRODUCT = "ADD_PRODUCT";
let SET_PRODUCTS = "SET_PRODUCTS";

let initialState = {
    productsPage: {
        products: [],       
    }
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                productsPage: {
                    ...state.productsPage,
                    products: [...action.products]
                }
            }
        }
        default:
            return state;
    }

}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })


