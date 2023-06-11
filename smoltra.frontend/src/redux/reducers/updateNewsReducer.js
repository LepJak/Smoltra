import { newsApi } from "../../api/api";

//action types
const CHANGE_VALUE_FIELD = "CHANGE_VALUE_FIELD";
const SET_NEWS = "SET_NEWS"

//state
let initialState = {
    updateNewsPage: {
        news: {
            id: null,
            created: null,
            title: null,
            annotation: null,
            content: null
        }
    }
}

export const updateNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE_FIELD: {
            return {
                ...state,
                updateNewsPage: {
                    ...state.updateNewsPage,
                    news: {
                        ...state.updateNewsPage.news,
                        [action.name]: action.value
                    }

                }
            }
        }
        case SET_NEWS: {
            return {
                ...state,
                updateNewsPage: {
                    ...state.updateNewsPage,
                    news: action.news

                }
            }
        }
        default:
            return state;
    }
}

export const changeValueField = (name, value) => ({ type: CHANGE_VALUE_FIELD, name, value })
export const setNews = (news) => ({ type: SET_NEWS, news })


export const getNews = (id) => (dispatch) => {

    let data = newsApi.getNews(id)
        .then(data => {
            console.log(data);
            dispatch(setNews(data))
        });

}

export const updateNews = (news) => (dispatch) => {
    const newNews = {
        newsId: news.id,
        title: news.title,
        annotation: news.annotation,
        content: news.content,

    }
    newsApi.updateNews(newNews)
        .then(data => {
            
        });
}
export const deleteNews = (id) => (dispatch) => {
    newsApi.deleteNews(id)
        .then(data => {
            
        });
}