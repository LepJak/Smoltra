let ADD_PRODUCT = "ADD_PRODUCT";
let SET_PRODUCTS="SET_PRODUCTS";

let initialState = {
    productsPage: {
        products: []
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 },
        //     { id: 1, name: "Name", price: 2000 }
        // ]
    }
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:{
            let newProduct = {
                id: "",
                name: "new",
                price: 100
            };
            return {
                ...state,
                productsPage : {
                    ...state.productsPage,
                    products: [...state.productsPage.products, newProduct]
                }
            }
        }
        case SET_PRODUCTS: {
                return {...state,
                    productsPage : {
                        ...state.productsPage,
                        products: [...action.products, ...action.products, ...action.products, ...action.products, ...action.products, ...action.products]
                    }
                    }
        }
        default:
            return state;
    }

}

export const setProducts = (products) => ({type: SET_PRODUCTS, products})