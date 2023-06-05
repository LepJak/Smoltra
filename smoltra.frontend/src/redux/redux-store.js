import { combineReducers, createStore }  from "redux";
import { productsReducer } from "./reducers/products-reduser";
import {productDetailsReducer} from "./reducers/productDetails-reducer";
import { cartReducer } from "./reducers/cart-reducer";

let reducers = combineReducers(
    {
        productsReducer: productsReducer,
        productDetailsReducer: productDetailsReducer,
        cartReducer: cartReducer
    }
);
let store = createStore(reducers);

export default store;