import { connect } from "react-redux";
import React from "react";
import CustomNavbar from "./Navbar";


class NavbarContainer extends React.Component{
    componentDidMount(){            
    }

    render(){
     return(<CustomNavbar {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        auth: state.authReducer.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);