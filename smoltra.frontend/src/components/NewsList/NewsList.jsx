import React from 'react';
import { Button } from 'react-bootstrap';
import NewsCard from './NewsCard';
import { useSelector } from 'react-redux';


const NewsList = (props) => {
    let state = props.newsListPage;
    let news = state?.news?.map((n) => <NewsCard news={n} />);
    const auth = useSelector(state => state.authReducer?.auth);
    return (
        <>
           
            <h1>Новости</h1>
            {
                auth?.role == "Admin" &&
                <a href='/createNews' style={{ margin: "5px", height: "60px", width:"95%" }}><Button style={{ height: "60px", width: "100%" }}>Добавить новость</Button></a>
            }
            {news}
        </>
    );
}
export default NewsList;