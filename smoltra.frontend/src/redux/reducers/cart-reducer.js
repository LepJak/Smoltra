import { cartApi, orderApi } from "../../api/api";

const ADD_PRODUCT_GUID_IN_CART = 'ADD_PRODUCTGUID_IN_CART';
const SET_PRODUCTS_GUIDS_FROM_CART = 'SET_PRODUCTS_GUIDS_FROM_CART';
const SET_PRODUCTS_IN_CART = 'SET_PRODUCTS_IN_CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const CHANGE_COUNT = 'CHANGE_COUNT';

let initialState = {
    items: [],
    productsGuidFromCart: [],
    totalPrice : 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_GUID_IN_CART: {
            console.log("!");
            return {
                ...state,
                productsGuidFromCart: [...state.productsGuidFromCart, action.product],
            }
        }
        case SET_PRODUCTS_GUIDS_FROM_CART: {
            return {
                ...state,
                productsGuidFromCart: [...action.productsGuidsFromCart]
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            console.log("ac")
            let i = 0;
            let arr = [...state.items];
            while (i < arr.length) {
                if (arr[i].cartItemId === action.id) {
                    arr.splice(i, 1);
                    break;
                } else {
                    ++i;
                }
            }
            console.log(arr);
            let totalPrice =arr.reduce((a, b) => a + b.totalPrice, 0);
            return {
                ...state,
                items: arr,
                totalPrice : totalPrice
            }
        }
        case SET_PRODUCTS_IN_CART: {
            let newItems = action.products.map(x => ({
                ...x,
                totalPrice: x.price * x.count
            }));
            let totalPrice =newItems.reduce((a, b) => a + b.totalPrice, 0);
            console.log(totalPrice)
            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice
            }
        }
        case CHANGE_COUNT: {
            var item = state.items.find(x => x === action.item);
            item.count = action.count;
            item.totalPrice = item.count * item.price
            let arr = [...state.items];
            let totalPrice = arr.reduce((a, b) => a + b.totalPrice, 0);
            console.log(totalPrice)
            return {
                ...state,
                items: arr,
                totalPrice: totalPrice
                
            }
        }
        default:
            return state;
    }
}

const changeCount = (item, count) => ({ type: CHANGE_COUNT, item, count })
const setProductInCart = (product) => ({ type: ADD_PRODUCT_GUID_IN_CART, product })
const setProductsInCart = (products) => ({ type: SET_PRODUCTS_IN_CART, products })
const setProductsGuidFromCart = (productsGuidsFromCart) => ({ type: SET_PRODUCTS_GUIDS_FROM_CART, productsGuidsFromCart })
const removeProductFromCart = (id) => ({ type: REMOVE_PRODUCT_FROM_CART, id })

export const addProductsInCart = (id) => {
    return (dispatch) => {
        cartApi.addProductInCart(id)
            .then(data => {
                dispatch(setProductInCart(id));   
                console.log(` reducer ${data}`)                
            });
    }
}

export const changeCountInCart = (item, count) => {
    return (dispatch) => {
        cartApi.updateCartItem(item.cartItemId, count)
            .then(data => {
                dispatch(changeCount(item, count));
            });
    }
}

export const deleteProductFromCart = (id) => {
    return (dispatch) => {
        cartApi.removeProductFromCart(id)
            .then(data => {
                dispatch(removeProductFromCart(id));
            });
    }
}

export const getProductsInCart = () => {
    return (dispatch) => {
        cartApi.getCartItems()
            .then(data => {
                dispatch(setProductsInCart(data.cartItems));
            });
    }
}

export const getProductsGuidsFromCart = () => {
    return (dispatch) => {
        cartApi.getProductsGuidsFromCart()
            .then(data => {
                dispatch(setProductsGuidFromCart(data.itemsGuidList))
            });
    }
}
export const cretateOrder = (items) => {
    let guids = items.map(x => ({cartItemId: x.cartItemId}))
    return (dispatch) => {
        orderApi.createOrder({ orderItems: guids })
            .then(data => {
                guids.forEach(x => dispatch(removeProductFromCart(x.cartItemId)))
            });
    }
}
