import { connect } from "react-redux";
import React from "react";
import Cart from "./Cart";
import { getProductsInCart,deleteProductFromCart, changeCountInCart, cretateOrder } from "../../redux/reducers/cart-reducer";


class CartContainer extends React.Component{
    componentDidMount(){             
         
         this.props.getProductsInCart();
    }
   removeItem(item){
    this.props.deleteProductFromCart(item.id);
   }

    render(){
     return(<Cart {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductsInCart: () => {
            dispatch(getProductsInCart());
        },
        deleteProductFromCart: (id) => {
            dispatch(deleteProductFromCart(id));
        },
        changeCountInCart:(item, count) =>{
            dispatch(changeCountInCart(item, count))
        },
        cretateOrder:(items) =>{
            dispatch(cretateOrder(items))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);