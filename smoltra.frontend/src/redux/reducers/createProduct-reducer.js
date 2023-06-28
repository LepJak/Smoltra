//action types
const CREATE_SPECIFICATION_GROUP = "CREATE_SPECIFICATION_GROUP";
const CREATE_SPECIFICATION = "CREATE_SPECIFICATION";
const CHANGE_NAME_SPECIFICATION_GROUP = "CHANGE_NAME_SPECIFICATION_GROUP";
const CHANGE_SPECIFICATION_VALUE = "CHANGE_SPECIFICATION_VALUE";
const DELETE_SPECIFICATION_GROUP_FROM_CREATE ="DELETE_SPECIFICATION_GROUP_FROM_CREATE"
const DELETE_SPECIFICATION_FROM_CREATE ="DELETE_SPECIFICATION_FROM_CREATE"

//state
let initialState = {
    createProductPage: {
        specificationGroups: []
    }
}

export const createProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SPECIFICATION_GROUP: {
            return {
                ...state,
                createProductPage: {
                    ...state.createProductPage,
                    specificationGroups: [...state.createProductPage.specificationGroups, { name: "Новая группа", specifications: [] }]
                }
            }
        }
        case CREATE_SPECIFICATION: {
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);

            if (group != null) {

                group.specifications = [...group.specifications, { name: "Новая характеристика" }]
                return {
                    ...state,
                    createProductPage: {
                        ...state.createProductPage,
                        specificationGroups: [...state.createProductPage.specificationGroups]
                    }
                }
            }
        }
        case CHANGE_NAME_SPECIFICATION_GROUP: {
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);

            if (group != null) {
                group.name = action.name;
                console.log(action.name)
                return {
                    ...state,
                    createProductPage: {
                        ...state.createProductPage,
                        specificationGroups: [...state.createProductPage.specificationGroups]
                    }
                }
            }
        }
        case CHANGE_SPECIFICATION_VALUE: {
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);

            if (group != null) {
                let specification = group.specifications.find(x => x === action.specification);
                if (specification != null) {
                    specification.name = action.newSpecification.name;
                    specification.value = action.newSpecification.value;
                    console.log(specification);

                    return {
                        ...state,
                        createProductPage: {
                            ...state.createProductPage,
                            specificationGroups: [...state.createProductPage.specificationGroups]
                        }
                    }
                }

            }
        }
        case DELETE_SPECIFICATION_FROM_CREATE: {
            var spGs = state.createProductPage.specificationGroups;
            let findedSpG = spGs.find(x => x == action.spG);
     
            if (findedSpG != null) {
                let specs = findedSpG.specifications;
                let findedSpec = specs.find(x => x === action.sp);
                if (findedSpec != null) {
                    const index = specs.indexOf(findedSpec);
                    if (index > -1) {
                        specs.splice(index, 1);
                    }
                }

            }
            return {
                ...state,
                createProductPage: {
                    ...state.createProductPage
                }
            }
        }
        case DELETE_SPECIFICATION_GROUP_FROM_CREATE: {
            var spGs = state.createProductPage.specificationGroups;
            let findedSpG = spGs.find(x => x == action.spG);

          
            if (findedSpG != null) {
                const index = spGs.indexOf(findedSpG);
                if (index > -1) {
                    spGs.splice(index, 1);
                }
            }
            return {
                ...state,
                createProductPage: {
                    ...state.createProductPage
                }
            }
        }
        default:
            return state;
    }
}

export const createSpecificationGroup = () => ({ type: CREATE_SPECIFICATION_GROUP })
export const createSpecification = (group) => ({ type: CREATE_SPECIFICATION, group: group })
export const changeNameSpecificationGroup = (group, name) => ({ type: CHANGE_NAME_SPECIFICATION_GROUP, group: group, name: name })
export const changeSpecificationValue = (group, specification, newSpecification) => 
({ type: CHANGE_SPECIFICATION_VALUE, group: group, specification: specification,newSpecification:newSpecification })
export const deleteSpecG = (spG) => ({ type: DELETE_SPECIFICATION_GROUP_FROM_CREATE, spG });
export const deleteSpec = (spG, sp) => ({ type: DELETE_SPECIFICATION_FROM_CREATE, spG, sp });