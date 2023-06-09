const SET_PRODUCT = "SET_PRODUCT";
const CHANGE_PROP ="CHANGE_PROP";
const ADD_IMAGES ="ADD_IMAGES";
const DELETE_IMAGE="DELETE_IMAGE";
const CREATE_SPECIFICATION_GROUP = "CREATE_SPECIFICATION_GROUP";
const CREATE_SPECIFICATION = "CREATE_SPECIFICATION";
const CHANGE_NAME_SPECIFICATION_GROUP = "CHANGE_NAME_SPECIFICATION_GROUP";
const CHANGE_SPECIFICATION_VALUE = "CHANGE_SPECIFICATION_VALUE";

let initialState = {
    updateProductPage: {
        product: {
            name: "",
            description: "",
            price: "",
            specificationGroups: [],
            images: [],
            deletedImages:[]
        }
    }
}

export const updateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {          
            var images = action.product.images.map(x =>({id: x.id,src:`https://localhost:7175/api/image/${x.id}`}));
            console.log(images);
            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                       name : action.product.name,                      
                       price: action.product.price,
                       description: action.product.description,
                       images : images,
                    }                   
                }
            }
        }
        case CHANGE_PROP: {
            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                        ...state.updateProductPage.product,
                        [action.nameProperty]: action.property
                    }
                }
            }
        }
        case ADD_IMAGES: {
            var image =  URL.createObjectURL(action.file);

            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                        ...state.updateProductPage.product,
                        images: [...state.updateProductPage.product.images, {id:null, src:image, file: action.file}]
                    }
                }
            }
        }
        case DELETE_IMAGE: {
            var images = state.updateProductPage.product.images;
            let findedImage = images.find(x => x == action.image);
            var deletedImages = [...state.updateProductPage.product.deletedImages];
            if (findedImage != null) {
                const index = images.indexOf(findedImage);
                if (index > -1) {
                    images.splice(index, 1);
                    deletedImages.push(findedImage);
                }
            }
            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                        ...state.updateProductPage.product,
                        images: [...state.updateProductPage.product.images],
                        deletedImages: deletedImages
                    }
                }
            }
        }
        case CREATE_SPECIFICATION_GROUP: {
            console.log("!!!!!")
            return {
                ...state,
                updateProductPage: {
                    ...state.v,
                    product: {
                        ...state.updateProductPage.product,
                        specificationGroups: [...state.updateProductPage.product.specificationGroups, { name: "Новая группа", specifications: [] }]
                    }                   
                }
            }
        }
        case CREATE_SPECIFICATION: {
            let group = state.updateProductPage.product.specificationGroups?.find(x => x === action.group);

            if (group != null) {

                group.specifications = [...group.specifications, { name: "Новая характеристика" }]
                return {
                    ...state,
                    updateProductPage: {
                        ...state.updateProductPage,
                        product : {
                            ...state.updateProductPage.product, 
                            specificationGroups: [...state.createProductPage.specificationGroups]
                        }                        
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
        default:
            return state;
    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const changeProductProp = (nameProperty, property) => ({ type: CHANGE_PROP, nameProperty, property })
export const addImage = (file) => ({type: ADD_IMAGES, file});
export const deleteImage = (image) => ({type: DELETE_IMAGE, image});
export const createSpecificationGroup = () => ({ type: CREATE_SPECIFICATION_GROUP })