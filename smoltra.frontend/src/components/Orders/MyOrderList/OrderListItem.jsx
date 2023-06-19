import { Card } from "react-bootstrap"
import React from "react";
import { compareAsc, format } from 'date-fns'
import { orderStateHelper } from "../../../helpers/orderStateHelper";

const OrderListItem = (props) => {
    var date = "";
    if (props?.order?.dateCreated != null)
       date = format(new Date(props?.order?.dateCreated), 'dd.MM.yyyy hh:mm')
    const state = orderStateHelper.getState(props.order.state);
    console.log(props?.order?.dateCreated);
    return (<>
        <a style={{textDecoration:"none", color:"black"}} href="#">
            <Card style={{ margin: "5px", minHeight: "150px", maxHeight: "200px" , borderWidth:"3px", borderColor:state.colorHex}}>
                <Card.Body>
                    <Card.Title style={{ fontSize: "25px" }}>Заказ № {props?.order?.id}</Card.Title>
                    <Card.Text style={{textAlign: "right",fontSize:"25px",color:state.colorHex, width: "100%",verticalAlign:"middle" }}>
                        {state.title}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ textAlign: "right" }}>
                    <small className="text-muted">{date}</small>
                </Card.Footer>
            </Card>
        </a>
    </>)
}

export default OrderListItem;

