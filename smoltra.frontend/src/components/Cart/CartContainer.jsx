import { connect } from "react-redux";
import Cart from "./Cart";

const mapStateToProps = (state) => {
    return {
        orders: state.cartReducer.orders
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);