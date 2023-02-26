import ProductDetails from "./ProductDetails";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        productDetailsPage : state.productDetailsReducer.productDetailsPage       
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);