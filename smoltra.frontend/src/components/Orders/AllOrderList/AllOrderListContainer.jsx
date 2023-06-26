import { connect } from "react-redux";
import React from "react";
import { getOrders } from "../../../redux/reducers/allOrderList-reducer";
import AllOrderList from "./AllOrderList";

class AllOrderListContainer extends React.Component{
    componentDidMount(){            
        this.props.getOrders()
    }

    render(){
     return(<AllOrderList {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        allOrdersPage: state.allOrdersReducer.allOrdersPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => {
            dispatch(getOrders())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllOrderListContainer);