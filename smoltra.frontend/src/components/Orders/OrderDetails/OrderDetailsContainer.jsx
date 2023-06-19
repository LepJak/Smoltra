import { connect } from "react-redux";
import React from "react";
import { getOrder } from "../../../redux/reducers/orderDetails-reducer";
import OrderDetails from "./OrderDetails";
import { withRouter } from "../../../extensions/WithRoute";

class OrderDetailsContainer extends React.Component{
    componentDidMount(){            
        this.props.getOrder(this.props.productId)
    }

    render(){
     return(<OrderDetails {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        orderDetailsPage: state.orderDetailsReducer.orderDetailsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (id) => {
            dispatch(getOrder(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderDetailsContainer));