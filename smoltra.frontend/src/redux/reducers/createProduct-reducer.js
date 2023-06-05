//action types
const CREATE_SPECIFICATION_GROUP = "CREATE_SPECIFICATION_GROUP";
const CREATE_SPECIFICATION = "CREATE_SPECIFICATION";
const CHANGE_NAME_SPECIFICATION_GROUP = "CHANGE_NAME_SPECIFICATION_GROUP";
const CHANGE_SPECIFICATION_VALUE = "CHANGE_SPECIFICATION_VALUE";

//state
let initialState = {
    createProductPage: {
        specificationGroups:[]
    }
}

export const createProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SPECIFICATION_GROUP: {
            debugger;
                return {...state,
                    createProductPage :{
                        ...state.createProductPage,
                        specificationGroups :[...state.createProductPage.specificationGroups,{name:"Новая группа", specifications:[]}]
                    }                        
                    }                  
        }
        case CREATE_SPECIFICATION: {
            debugger;  
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);
            
            if(group != null){
                debugger;
                group.specifications = [...group.specifications,{name:"Новая группа"}]
                return {...state,
                    createProductPage :{
                        ...state.createProductPage,
                        specificationGroups :[...state.createProductPage.specificationGroups]
                    }     
                }    
            }                               
        }
        case CHANGE_NAME_SPECIFICATION_GROUP: { 
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);
            
            if(group != null){
                group.name = action.name;
                return {...state,
                    createProductPage :{
                        ...state.createProductPage,
                        specificationGroups :[...state.createProductPage.specificationGroups]
                    }     
                }    
            }                               
        }
        case CHANGE_SPECIFICATION_VALUE: {
            let group = state.createProductPage.specificationGroups?.find(x => x === action.group);
            
            if(group != null){
                let specification = group.specifications.find(x => x === action.specification);

                specification.name = action.name;
                return {...state,
                    createProductPage :{
                        ...state.createProductPage,
                        specificationGroups :[...state.createProductPage.specificationGroups]
                    }     
                }    
            }                               
        }
        default:
            return state;
    }
}

export const createSpecificationGroup = () => ({type: CREATE_SPECIFICATION_GROUP})
export const createSpecification = (group) => ({type: CREATE_SPECIFICATION, group: group})
export const changeNameSpecificationGroup = (group, name) => ({type: CHANGE_NAME_SPECIFICATION_GROUP, group: group, name: name})
export const changeSpecificationValue = (group, specification, newSpecification) => ({type:CHANGE_SPECIFICATION_VALUE, group: group,specification:specification})