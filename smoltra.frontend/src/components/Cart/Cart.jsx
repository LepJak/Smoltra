import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "./CratItem"
   
const Cart = (props) =>{
    let state = props.orders;
    let orders = state.map(p => <CartItem order={p}/>); 
    return(<Container>
        <Row className="justify-content-center">{orders}</Row>      
        </Container>)
}

export default Cart;

