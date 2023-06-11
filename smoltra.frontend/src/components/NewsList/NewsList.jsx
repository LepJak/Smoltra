import React from 'react';
import { Button } from 'react-bootstrap';
import NewsCard from './NewsCard';


const NewsList = (props) => {
    let state = props.newsListPage;
    let news = state?.news?.map((n) => <NewsCard news={n}/>);
    return (
        <>
        <h1>Новости</h1>
        {news}
        </>
    );
}
export default NewsList;