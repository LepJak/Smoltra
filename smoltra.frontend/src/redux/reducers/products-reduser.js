import { cartApi, productApi } from '../../api/api';

let ADD_PRODUCT = "ADD_PRODUCT";
let SET_PRODUCTS = "SET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";


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
        case DELETE_PRODUCT: {
            let products = state.productsPage.products
            let findedProduct = products.find(x => x == action.product);
            if (findedProduct != null) {
                const index = products.indexOf(findedProduct);
                if (index > -1) {
                    products.splice(index, 1);
                }
            }
            return {
                ...state,
                productsPage: {
                    ...state.productsPage,
                    products: [...state.productsPage.products]
                }
            }
        }
        default:
            return state;
    }

}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })
export const removeProduct = (product) => ({ type: DELETE_PRODUCT, product })


export const deleteProduct = (product) => {
    return (dispatch) => {
        productApi.removeProduct(product.id)
            .then(data => {
                dispatch(removeProduct(product));
            });
    }
}

export const getProducts = (search="") => {
    return (dispatch) => {
        console.log(`!@#!# ${search}`);
        productApi.getProducts(search, 1, 20)
            .then(data => {
                console.log(data)
                dispatch(setProducts(data.products));
            });
    }
}