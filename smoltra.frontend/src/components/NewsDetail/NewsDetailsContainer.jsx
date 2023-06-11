import { connect } from "react-redux";
import React from "react";
import { getNews } from "../../redux/reducers/newsDetails-reducer";
import NewsDetails from "./NewsDetails";
import { withRouter } from "../../extensions/WithRoute";

class NewsDetailsContainer extends React.Component{
    componentDidMount(){            
        this.props.getNews(this.props.productId)
    }

    render(){
     return(<NewsDetails {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        newsDetailsPage: state.newsDetailsReducer.newsDetailsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNews: (productId) => {
            dispatch(getNews(productId))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsDetailsContainer));