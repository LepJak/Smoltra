import { connect } from "react-redux";
import React from "react";
import { withRouter } from "../../../../extensions/WithRoute";
import OrderUpdate from "./UpdateOrder";
import { getOrder } from "../../../../redux/reducers/updateOrder-reducer";

class OrderUpdateContainer extends React.Component{
    componentDidMount(){            
        this.props.getOrder(this.props.productId)
    }

    render(){
     return(<OrderUpdate {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        orderUpdatePage: state.orderUpdateReducer.orderUpdatePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (id) => {
            dispatch(getOrder(id))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderUpdateContainer));