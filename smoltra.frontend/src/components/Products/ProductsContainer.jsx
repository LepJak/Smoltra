import Products from "./Products";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        productsPage: state.productsReducer.productsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {       
        }   
}
export const  ProductsContainer =  connect(mapStateToProps, mapDispatchToProps)(Products);