import { connect } from "react-redux";
import React from "react";
import MainPage from "./MainPage";
import { getLastNews, getProducts } from "../../redux/reducers/mainPage-reducer";


class MainPageContainer extends React.Component{
    componentDidMount(){            
        this.props.getLastNews()
        this.props.getProducts()
        console.log(this.props);
    }

    render(){
     return(<MainPage {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        mainPage: state.mainPageReducer.mainPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLastNews: () => {
            dispatch(getLastNews())
        },
        getProducts: () => {
            dispatch(getProducts())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);