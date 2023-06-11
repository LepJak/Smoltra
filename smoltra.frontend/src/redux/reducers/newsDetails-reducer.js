import { newsApi } from "../../api/api";

//action types
const SET_NEWS_DETAILS = "SET_NEWS_DETAILS"

//state
let initialState = {
    newsDetailsPage: {
        news: {
            title: null,
            annotation: null,
            content: null,
            created: null
        }
    }
}

export const newsDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DETAILS: {
            return {
                ...state,
                newsDetailsPage: {
                    ...state.newsDetailsPage,
                    news: action.news

                }
            }
        }
        default:
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS_DETAILS, news })


export const getNews = (id) => (dispatch) => {
    newsApi.getNews(id)
        .then(data => {
            dispatch(setNews(data))
        });

}
