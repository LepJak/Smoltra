import { connect } from "react-redux";
import CreateProduct from "./CreateProduct";
import { createSpecificationGroup, createSpecification, deleteSpecG, deleteSpec, changeNameSpecificationGroup, changeSpecificationValue } from "../../../../redux/reducers/createProduct-reducer";
import { productApi } from "../../../../api/api";
import { getProducts, setProducts } from "../../../../redux/reducers/products-reduser";

const createProduct = (productInfo, images, specifications) => {
    return (dispatch) => {
        let normalImages = images.map(x => x.image);
        var product = {
            name: productInfo.name,
            description: productInfo.description,
            price: productInfo.price,
            images: normalImages,
            specifications: specifications
        }
        productApi.createProduct(product)
        .then(data=>{
            dispatch(getProducts(""));
        });

    }

}
const mapStateToProps = (state) => {
    return {
        createProductPage: state.createProductReducer.createProductPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProductaaaaaa: (productInfo, images, specifications) => {
            dispatch(createProduct(productInfo, images, specifications));
        },
        createSpecification,
        changeNameSpecificationGroup,
        changeSpecificationValue,
        deleteSpecG,
        deleteSpec
    

    }
}
export const CreateProductContainer = connect(mapStateToProps,{mapDispatchToProps, createProduct, createSpecificationGroup, createSpecification,
    changeNameSpecificationGroup,
    changeSpecificationValue, deleteSpecG,deleteSpec})(CreateProduct);