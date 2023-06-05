let initialState ={
    orders:[
        {
            image: null,
            name: "Nam324444444444444444444444444444444444444444444444444444444444444444444444444444444e",
            count: 1,
            price: 1000
        },
        {
            image: null,
            name: "Name",
            count: 1,
            price: 1000
        },{
            image: null,
            name: "Name",
            count: 1,
            price: 1000
        },{
            image: null,
            name: "Name",
            count: 1,
            price: 1000
        }
    ]
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {        
        default:
            return state;
    }
}

