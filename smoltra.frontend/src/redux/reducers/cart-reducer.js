import { cartApi, orderApi } from "../../api/api";

const ADD_PRODUCT_GUID_IN_CART = 'ADD_PRODUCTGUID_IN_CART';
const SET_PRODUCTS_GUIDS_FROM_CART = 'SET_PRODUCTS_GUIDS_FROM_CART';
const SET_PRODUCTS_IN_CART = 'SET_PRODUCTS_IN_CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const CHANGE_COUNT = 'CHANGE_COUNT';

let initialState = {
    items: [],
    productsGuidFromCart: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_GUID_IN_CART: {
            debugger;
            console.log("!");
            return {
                ...state,
                productsGuidFromCart: [...state.productsGuidFromCart, action.product]
            }
        }
        case SET_PRODUCTS_GUIDS_FROM_CART: {
            return {
                ...state,
                productsGuidFromCart: [action.id]
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
            return {
                ...state,
                items: arr
            }
        }
        case SET_PRODUCTS_IN_CART: {
            return {
                ...state,
                items: action.products
            }
        }
        case CHANGE_COUNT: {
            var item = state.items.find(x => x === action.item);
            item.count = action.count;
            let arr = [...state.items];
            return {
                ...state,
                items: arr
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
            });
    }
}

export const changeCountInCart = (item, count) => {
    return (dispatch) => {
        console.log(count)
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
        let data = cartApi.getProductsGuidsFromCart()
            .then(data => {
                console.log(data.itemsGuidList)
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
