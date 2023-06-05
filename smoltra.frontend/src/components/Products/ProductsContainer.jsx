import Products from "./Products";
import {connect} from "react-redux";
import { setProducts } from "../../redux/reducers/products-reduser";
import { productApi } from '../../api/api';
import React from "react";
import axios from 'axios';


class ProductsContainer extends React.Component{
   componentDidMount(){
        axios.get("https://localhost:7175/api/Product?numberPage=1&countItems=20")
        .then(response =>  this.props.setProducts(response.data.products));        
   }

   render(){
    return(<Products {...this.props} productsPage={this.props.productsPage}/>);
   }
}
const mapStateToProps = (state) => {
    return {
        productsPage: state.productsReducer.productsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {     
        setProducts: (products) => {
            dispatch(setProducts(products));  
        }  
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);