import React from "react";
import { compareAsc, format } from 'date-fns'
import { orderStateHelper } from "../../../helpers/orderStateHelper";
import { Row, Col, Table } from "react-bootstrap";
import emptyImage from "../../../images/empty_photo.jpg";

const OrderDetails = (props) => {
    let state = props?.orderDetailsPage?.order;

    const handleImageError = e => { e.target.src = emptyImage };
    const imageUrl = (id) =>`https://localhost:7175/api/image/${id}`;
    var date = "";
    if (state?.created != null)
        date = format(new Date(state?.created), 'dd.MM.yyyy hh:mm')
    const status = orderStateHelper.getState(state?.state);
    let items = state?.orderItems?.map(x => (
        <tr>
            <td><img style={{width:"120px"}} onError={handleImageError}  src={imageUrl(x.imageId)}/></td>
            <td>{x.nameProduct}</td>
            <td>{x.count}</td>
            <td>{x.priceForOne} ₽</td>
            <td>{x.totalPrice} ₽</td>
        </tr>))
    //let orders = state?.orders?.map((n) => <OrderListItem order={n}/>);
    return (
        <>
            <h2>Заказ № {state?.orderId}</h2>


            <Row style={{ width: "auto" }} >
                <Col><p style={{ fontSize: "20px" }}>{date}</p></Col>
                <Col><p style={{ color: status.colorHex, fontSize: "26px", fontWeight: "bold" }}>{status?.title}</p></Col>
            </Row>
            <Table striped bordered hover>
                <tr>
                    <th></th>
                    <th>Наименование</th>
                    <th>Кол-во</th>
                    <th>Цена за ед.</th>
                    <th>Сумма</th>
                </tr>
                {items}
            </Table>
            <p style={{fontWeight:"bold", fontSize:"20px"}}>ИТОГО: {state.totalPrice} ₽</p>

        </>)
}

export default OrderDetails;

