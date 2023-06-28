const SET_PRODUCT = "SET_PRODUCT";
const CHANGE_PROP = "CHANGE_PROP";
const ADD_IMAGES = "ADD_IMAGES";
const DELETE_IMAGE = "DELETE_IMAGE";
const CREATE_SPECIFICATION_GROUP = "CREATE_SPECIFICATION_GROUP";
const CREATE_SPECIFICATION = "CREATE_SPECIFICATION";
const CHANGE_NAME_SPECIFICATION_GROUP = "CHANGE_NAME_SPECIFICATION_GROUP";
const CHANGE_SPECIFICATION_VALUE = "CHANGE_SPECIFICATION_VALUE";
const DELETE_SPECIFICATION_GROUP = "DELETE_SPECIFICATION_GROUP"
const DELETE_SPECIFICATION = "DELETE_SPECIFICATION"

let initialState = {
    updateProductPage: {
        product: {
            id: null,
            name: "",
            description: "",
            price: "",
            specificationGroups: [],
            images: [],
            deletedImages: []
        }
    }
}

export const updateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            var images = action.product.images.map(x => ({ id: x.id, src: `https://localhost:7175/api/image/${x.id}` }));
            console.log(action.product);
            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                        deletedImages: [],
                        id: action.product.id,
                        name: action.product.name,
                        price: action.product.price,
                        description: action.product.description,
                        images: images,
                        specificationGroups: action.product.specificationGroups
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
            var image = URL.createObjectURL(action.file);

            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage,
                    product: {
                        ...state.updateProductPage.product,
                        images: [...state.updateProductPage.product.images, { id: null, src: image, file: action.file }]
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
                    if (state.updateProductPage.product != null)
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
                    ...state.updateProductPage,
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
                        product: {
                            ...state.updateProductPage.product,
                            specificationGroups: [...state.updateProductPage.product.specificationGroups]
                        }
                    }
                }
            }
        }
        case CHANGE_NAME_SPECIFICATION_GROUP: {
            let group = state.updateProductPage.product.specificationGroups?.find(x => x === action.group);

            if (group != null) {
                group.name = action.name;
                return {
                    ...state,
                    updateProductPage: {
                        ...state.updateProductPage,
                        product: {
                            ...state.updateProductPage.product,
                            specificationGroups: [...state.updateProductPage.product.specificationGroups]
                        }

                    }
                }
            }
        }
        case CHANGE_SPECIFICATION_VALUE: {
            let group = state.updateProductPage.product.specificationGroups?.find(x => x === action.group);
            if (group != null) {
                let specification = group.specifications.find(x => x === action.specification);
                if (specification != null) {
                    specification.name = action.newSpecification.name;
                    specification.value = action.newSpecification.value;
                    console.log(specification);
                    return {
                        ...state,
                        updateProductPage: {
                            ...state.updateProductPage,
                            product: {
                                ...state.updateProductPage.product,
                            }

                        }
                    }
                }
            }
        }
        case DELETE_SPECIFICATION: {
            var spGs = state.updateProductPage.product.specificationGroups;
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
                updateProductPage: {
                    ...state.updateProductPage
                }
            }
        }
        case DELETE_SPECIFICATION_GROUP: {
            var spGs = state.updateProductPage.product.specificationGroups;
            let findedSpG = spGs.find(x => x == action.spG);

          
            if (findedSpG != null) {
                const index = spGs.indexOf(findedSpG);
                if (index > -1) {
                    spGs.splice(index, 1);
                }
            }
            return {
                ...state,
                updateProductPage: {
                    ...state.updateProductPage
                }
            }
        }
        default:
            return state;
    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })
export const changeProductProp = (nameProperty, property) => ({ type: CHANGE_PROP, nameProperty, property })
export const addImage = (file) => ({ type: ADD_IMAGES, file });
export const deleteImage = (image) => ({ type: DELETE_IMAGE, image });
export const createSpecificationGroup = () => ({ type: CREATE_SPECIFICATION_GROUP })
export const createSpecification = (group) => ({ type: CREATE_SPECIFICATION, group: group })
export const changeSpecificationValue = (group, specification, newSpecification) =>
    ({ type: CHANGE_SPECIFICATION_VALUE, group: group, specification: specification, newSpecification: newSpecification })
export const changeNameSpecificationGroup = (group, name) => ({ type: CHANGE_NAME_SPECIFICATION_GROUP, group: group, name: name })
export const deleteSpecG = (spG) => ({ type: DELETE_SPECIFICATION_GROUP, spG });
export const deleteSpec = (spG, sp) => ({ type: DELETE_SPECIFICATION, spG, sp });