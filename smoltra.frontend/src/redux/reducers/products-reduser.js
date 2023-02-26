let ADD_PRODUCT = "ADD_PRODUCT";

let initialState = {
    productsPage: {
        products: [
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 },
            { id: 1, name: "Name", price: 2000 }
        ]
    }
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let newProduct = {
                id: "",
                name: "new",
                price: 100
            };
            return {
                ...state,
                products: [...state.products, newProduct]
            }
        default:
            return state;
    }

}