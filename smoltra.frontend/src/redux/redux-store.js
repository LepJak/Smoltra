import { combineReducers, createStore }  from "redux";
import { productsReducer } from "./reducers/products-reduser";
import {productDetailsReducer} from "./reducers/productDetails-reducer";

let reducers = combineReducers(
    {
        productsReducer: productsReducer,
        productDetailsReducer: productDetailsReducer
    }
);
let store = createStore(reducers);

export default store;