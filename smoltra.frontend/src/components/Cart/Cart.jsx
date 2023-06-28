import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { cretateOrder } from "../../redux/reducers/cart-reducer";
import CartItem from "./CratItem"

const Cart = (props) => {
    let state = props.cartReducer.items;
    let orders;
    if (state?.length == 0) {
        orders = "!!!";
        console.log("Э!");
    }
    const cretateOrder = () => {
        props.cretateOrder(state)
    }
    console.log(props)
    orders = state.map(p => <CartItem order={p} deleteProductFromCart={props.deleteProductFromCart} changeCountInCart={props.changeCountInCart} />);
    return (<Container style={{ height: "100%" }}>
        <Row className="justify-content-center">{(orders.length == 0) && <h3>Корзина пуста!</h3>} {orders}</Row>
        <div className="text-center text-lg-end" style={{ marginTop: 'auto' }}>
            {
                orders?.length != 0 &&
                <Button style={{ fontSize: "25px" }} onClick={cretateOrder}>Оформить заказ на сумму {props.cartReducer.totalPrice}₽</Button>


            }

        </div>
    </Container>)
}

export default Cart;

