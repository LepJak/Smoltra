import Products from "./Products";
import {connect} from "react-redux";
import { setProducts } from "../../redux/reducers/products-reduser";
import { productApi } from '../../api/api';
import React from "react";
import { getProductsGuidsFromCart } from "../../redux/reducers/cart-reducer";
import { addProductsInCart } from "../../redux/reducers/cart-reducer";

class ProductsContainer extends React.Component{
   componentDidMount(){             
        productApi.getProducts(1,20).then(data=>{
            this.props.setProducts(data?.products);
        }); 
        this.props.getProductsGuidsFromCart();
   }
  
   render(){
    console.log("render")
    return(<Products {...this.props} productsPage={this.props.productsPage} addProductInCart={this.props.addProductsInCart}/>);
   }
}


const mapStateToProps = (state) => {
    return {
        productsPage: state.productsReducer.productsPage,
        productsGuidFromCart : state.cartReducer.productsGuidFromCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {     
        setProducts: (products) => {
            dispatch(setProducts(products));  
        } ,
        getProductsGuidsFromCart: () => {
            dispatch(getProductsGuidsFromCart())
        },
        addProductsInCart: (id) => {
            dispatch(addProductsInCart(id) )
        } ,
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);