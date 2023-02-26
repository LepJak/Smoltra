//action types


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
        default:
            return state;
    }

}