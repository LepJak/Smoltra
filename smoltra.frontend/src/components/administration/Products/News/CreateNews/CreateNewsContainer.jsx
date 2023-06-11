import { connect } from "react-redux";
import React from "react";
import CreateNews from "./CreateNews";
import { changeValueField } from "../../../../../redux/reducers/createNews-reducer";
import { createNews } from "../../../../../redux/reducers/createNews-reducer";

class CreateNewsContainer extends React.Component{
    componentDidMount(){             
    }

    render(){
     return(<CreateNews {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        createNewsPage: state.createNewsReducer.createNewsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeValueField: (name, value) => {
            dispatch(changeValueField(name, value));
        },
        createNews :(news) =>{
            dispatch(createNews(news));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewsContainer);