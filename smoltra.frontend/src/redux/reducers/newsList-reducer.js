import { newsApi } from "../../api/api";

//action types
const SET_NEWS_LIST = "SET_NEWS_LIST"

//state
let initialState = {
    newsListPage: {
        news: []
    }
}

export const newsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST: {
            return {
                ...state,
                newsListPage: {
                    ...state.newsListPage,
                    news: action.news

                }
            }
        }
        default:
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS_LIST, news })


export const getNews = () => (dispatch) => {

    let data = newsApi.getNewsList()
        .then(data => {
            console.log("apiDetail");
            dispatch(setNews(data.news))
        });

}
