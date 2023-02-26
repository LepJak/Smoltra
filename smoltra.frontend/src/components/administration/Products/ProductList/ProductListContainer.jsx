import {connect} from "react-redux";
import ProductList from "./ProductList";

const mapStateToProps = (state) => {
    return {
        productsPage: state.productsReducer.productsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {       
        }   
}
export const  ProductListContainer =  connect(mapStateToProps, mapDispatchToProps)(ProductList);