import { connect } from "react-redux";
import React from "react";
import OrderList from "./MyOrderList";
import { getOrders } from "../../../redux/reducers/myOrderList-reducer";

class MyOrderListContainer extends React.Component{
    componentDidMount(){            
        this.props.getOrders()
    }

    render(){
     return(<OrderList {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        myOrdersPage: state.myOrderListReducer.myOrdersPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => {
            dispatch(getOrders())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyOrderListContainer);