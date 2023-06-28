import ProductDetails from "./ProductDetails";
import { connect } from "react-redux";
import { setProduct, swapImage } from "../../redux/reducers/productDetails-reducer"; 
import React from "react";
import Products from "../Products/Products";
import axios from "axios";
import { useParams } from "react-router-dom";
import { withRouter } from "../../extensions/WithRoute";
import { addProductsInCart } from "../../redux/reducers/cart-reducer";

class ProductDetailsContainer extends React.Component{
    componentDidMount(){
        
        axios.get("https://localhost:7175/api/Product/"+this.props.productId)
        .then(response => {
            this.props.setProduct(response.data);
        });
    }
    
    render(){
        return(<ProductDetails {...this.props} productDetailsPage={this.props.productDetailsPage}/>)
    }
}
const mapStateToProps = (state) => {
    return {
        productDetailsPage : state.productDetailsReducer.productDetailsPage  ,
        productsGuidFromCart : state.cartReducer.productsGuidFromCart    
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProduct(product));  
        },
        addProductsInCart: (id) => {
            dispatch(addProductsInCart(id) )
        } ,
        swapImage :(id) =>{
            dispatch(swapImage(id));
        }
    }
}


//


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer));