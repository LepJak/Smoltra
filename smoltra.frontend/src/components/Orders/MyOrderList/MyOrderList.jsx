import React from "react";
import OrderListItem from "./OrderListItem";
   
const MyOrderList = (props) =>{
    let state = props.myOrdersPage;
    let orders = state?.orders?.map((n) => <OrderListItem order={n}/>);
    return(
    <>
        {orders}
    </>)
}

export default MyOrderList;

