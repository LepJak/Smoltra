import React from 'react';
import { compareAsc, format } from 'date-fns'


const NewsDetails = (props) => {
    let state = props.newsDetailsPage;
    let date = null;
    if(state?.news?.created != null)
    {
        date = format(new Date(state?.news?.created), 'dd.MM.yyyy')
    }
        

    return (
        <>
        <h1>{state?.news?.title}</h1>
        <p style={{width:"100%", textAlign:"right", fontSize:"20px"}}>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: state?.news?.content }} />

        </>
    );
}
export default NewsDetails;