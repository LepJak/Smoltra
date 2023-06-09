import {applyMiddleware, combineReducers, createStore} from "redux";
import { productsReducer } from "./reducers/products-reduser";
import {productDetailsReducer} from "./reducers/productDetails-reducer";
import { cartReducer } from "./reducers/cart-reducer";
import { createProductReducer } from "./reducers/createProduct-reducer";

import thunkMiddleware from "redux-thunk";
import { updateProductReducer } from "./reducers/updateProduct-reducer";

let reducers = combineReducers(
    {
        productsReducer: productsReducer,
        productDetailsReducer: productDetailsReducer,
        cartReducer: cartReducer,
        createProductReducer : createProductReducer,
        updateProductReducer : updateProductReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;