import {connect} from "react-redux";
import CreateProduct from "./CreateProduct";
import { createSpecificationGroup, createSpecification} from "../../../../redux/reducers/createProduct-reducer";

const mapStateToProps = (state) => {
    return {
        createProductPage: state.createProductReducer.createProductPage
    }
}

export const CreateProductContainer =  connect(mapStateToProps, {createSpecificationGroup,createSpecification})(CreateProduct);