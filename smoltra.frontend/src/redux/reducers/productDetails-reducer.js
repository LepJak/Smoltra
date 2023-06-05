//action types
const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";

//state
let initialState = {
    productDetailsPage: {
        product: {
            name: "Name",
            price: 200,
            description: "Description",
            specificationsGroup: [
                {
                    name: "specificationGroup1",
                    specifications: [
                        {
                            name: "Specification1",
                            value: "ValueSpecification1"
                        },
                        {
                            name: "Specification2",
                            value: "ValueSpecification2"
                        }
                    ]

                },
                {
                    name: "specificationGroup2",
                    specifications: [
                        {
                            name: "Specification1",
                            value: "ValueSpecification1"
                        },
                        {
                            name: "Specification2",
                            value: "ValueSpecification2"
                        },
                        {
                            name: "Specification3",
                            value: "ValueSpecification3"
                        }
                    ]

                }
            ]
        }
    }
}

export const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_DETAIL: {
                return {...state,
                    productDetailsPage :{
                        ...state.productDetailsPage,
                        product: action.product
                    }                        
                    }                  
        }
        default:
            return state;
    }
}

export const setProduct = (product) => ({type: SET_PRODUCT_DETAIL, product})