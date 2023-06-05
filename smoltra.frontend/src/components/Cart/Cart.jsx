import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "./CratItem"
   
const Cart = (props) =>{
    let state = props.items;
    let orders;
    if(state?.length == 0){
        orders = "!!!";
        console.log("Э!");
    }
    orders = state.map(p => <CartItem order={p} deleteProductFromCart={props.deleteProductFromCart}/>); 
    return(<Container>
        <Row className="justify-content-center">{(orders.length == 0) && <h3>Корзина пуста!</h3>} {orders}</Row>      
        </Container>)
}

export default Cart;

