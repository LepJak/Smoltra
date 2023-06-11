import { connect } from "react-redux";
import React from "react";
import { getNews } from "../../redux/reducers/newsList-reducer";
import NewsList from "./NewsList";

class NewsListContainer extends React.Component{
    componentDidMount(){            
        this.props.getNews()
    }

    render(){
     return(<NewsList {...this.props}/>);
    }
 }
 
const mapStateToProps = (state) => {
    return {
        newsListPage: state.newsListReducer.newsListPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getNews())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);