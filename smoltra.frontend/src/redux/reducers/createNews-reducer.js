import { newsApi } from "../../api/api";

//action types
const CHANGE_VALUE_FIELD = "CHANGE_VALUE_FIELD";


//state
let initialState = {
    createNewsPage: {
        newNews: {
            title:null,
            annotation:null,
            content: null
        }
    }
}

export const createNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE_FIELD: {
            console.log(action.value);
            return {
                ...state,
                createNewsPage: {
                    ...state.createNewsPage,
                    newNews: {
                        ...state.createNewsPage.newNews,
                        [action.name]: action.value
                    }
                    
                }
            }
        }       
        default:
            return state;
    }
}

export const changeValueField = (name, value ) => ({ type: CHANGE_VALUE_FIELD, name, value })


export const createNews = (news) => {
    console.log(news);
    return (dispatch) => {
        let data = newsApi.createNews(news)
            .then(data => {
            });
    }
}