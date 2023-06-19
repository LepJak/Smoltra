import {applyMiddleware, combineReducers, createStore} from "redux";
import { productsReducer } from "./reducers/products-reduser";
import {productDetailsReducer} from "./reducers/productDetails-reducer";
import { cartReducer } from "./reducers/cart-reducer";
import { createProductReducer } from "./reducers/createProduct-reducer";
import thunkMiddleware from "redux-thunk";
import { updateProductReducer } from "./reducers/updateProduct-reducer";
import { createNewsReducer } from "./reducers/createNews-reducer";
import { updateNewsReducer } from "./reducers/updateNewsReducer";
import { newsListReducer } from "./reducers/newsList-reducer";
import { newsDetailsReducer } from "./reducers/newsDetails-reducer";
import { myOrderListReducer } from "./reducers/myOrderList-reducer";
import { orderDetailsReducer } from "./reducers/orderDetails-reducer";
import { orderUpdateReducer } from "./reducers/updateOrder-reducer";

let reducers = combineReducers(
    {
        productsReducer: productsReducer,
        productDetailsReducer: productDetailsReducer,
        cartReducer: cartReducer,
        createProductReducer : createProductReducer,
        updateProductReducer : updateProductReducer,
        createNewsReducer : createNewsReducer,
        updateNewsReducer:updateNewsReducer,
        newsListReducer : newsListReducer,
        newsDetailsReducer : newsDetailsReducer,
        myOrderListReducer : myOrderListReducer,
        orderDetailsReducer : orderDetailsReducer,
        orderUpdateReducer : orderUpdateReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;