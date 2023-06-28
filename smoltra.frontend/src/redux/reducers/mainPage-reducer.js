import { newsApi, productApi } from "../../api/api";

const SET_LAST_NEWS = "SET_NEWS_LIST"
const SET_TOP_SELERS = "SET_TOP_SELERS"

//state
let initialState = {
    mainPage: {
        news: [],
        topSelers: []
    }
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_NEWS: {
            return {
                ...state,
                mainPage: {
                    ...state.mainPage,
                    news: action.news.slice(0, 5)

                }
            }
        }
        case SET_TOP_SELERS: {
            return {
                ...state,
                mainPage: {
                    ...state.mainPage,
                    topSelers: action.products.slice(0, 5)

                }
            }
        }
        default:
            return state;
    }
}

export const setLastNews = (news) => ({ type: SET_LAST_NEWS, news })
export const setTopSelers = (products) => ({ type: SET_TOP_SELERS, products })

export const getLastNews = () => (dispatch) => {

    let data = newsApi.getNewsList()
        .then(data => {
            dispatch(setLastNews(data.news))
        });

}
export const getProducts = () => (dispatch) => {

    let data = productApi.getProducts("")
        .then(data => {
            dispatch(setTopSelers(data.products))
        });

}