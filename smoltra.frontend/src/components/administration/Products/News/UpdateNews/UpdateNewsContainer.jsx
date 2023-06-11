import { connect } from "react-redux";
import React from "react";
import UpdateNews from "./UpdateNews";
import { changeValueField } from "../../../../../redux/reducers/updateNewsReducer";
import { getNews, deleteNews, updateNews } from "../../../../../redux/reducers/updateNewsReducer";
import { withRouter } from "../../../../../extensions/WithRoute";

class UpdateNewsContainer extends React.Component{
    componentDidMount(){       
        console.log("cont")
        console.log(this.props.productId);      
        this.props.getNews(this.props.productId)

    }

    render(){
     return(<UpdateNews {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        updateNewsPage: state.updateNewsReducer.updateNewsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeValueField: (name, value) => {
            dispatch(changeValueField(name, value));
        },
        getNews: (id) => {
            dispatch(getNews(id))
        },
        deleteNews:(id) => {
            dispatch(deleteNews(id))
        },
        updateNews:(news) => {
            dispatch(updateNews(news))
        },
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateNewsContainer));