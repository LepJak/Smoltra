import { connect } from "react-redux";
import CreateProduct from "./CreateProduct";
import { createSpecificationGroup, createSpecification, changeNameSpecificationGroup, changeSpecificationValue } from "../../../../redux/reducers/createProduct-reducer";
import { productApi } from "../../../../api/api";

const createProduct = (productInfo, images, specifications) => {
    return (dispatch) => {
        let normalImages = images.map(x => x.image);
        var product = {
            name: productInfo.name,
            description: productInfo.description,
            price: productInfo.price,
            images: normalImages
        }
        productApi.createProduct(product)
        .then(data=>{
            dispatch();
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
        createSpecificationGroup,
        createSpecification,
        changeNameSpecificationGroup,
        changeSpecificationValue

    }
}
export const CreateProductContainer = connect(mapStateToProps,mapDispatchToProps)(CreateProduct);