import React from "react";
import OrderListItem from "./OrderListItem";
   
const AllOrderList = (props) =>{
    let state = props.allOrdersPage;
    let orders = state?.orders?.map((n) => <OrderListItem order={n}/>);
    return(
    <>
        {orders}
    </>)
}

export default AllOrderList;