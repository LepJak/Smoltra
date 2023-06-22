import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Stack from '@mui/material/Stack';
import "./style.css";
import { Button } from 'react-bootstrap';


const CreateNews = (props) => {
    const state = props.createNewsPage
    let config = {
        language: "ru"
    }
    const navigate = useNavigate();
    const createNews= () =>{
        props.createNews(state?.newNews)
        navigate("/news")
    }

    const changeField = (e) => {
        props.changeValueField(e.target.id, e.currentTarget.value)
    }

    return (<>
        <div>

        </div>
        <h3>
            Содание новости
        </h3>
        <Stack>
            <TextField
                id="title"
                label="Название новости"
                style={{ margin: "10px" }}
                value={state?.newNews?.title}
                onChange={changeField}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                id="annotation"
                label="Пояснение"
                rows="5"
                onChange={changeField}
                value={state?.newNews?.annotation}
                multiline
                style={{ margin: "10px" }}
                InputLabelProps={{ shrink: true }} />
        </Stack>


        <CKEditor
            editor={ClassicEditor}
            style={{ margin: "10px" }}
            data={state?.newNews?.content}
            onChange={(event, editor) => {
                const data = editor.getData();
                props.changeValueField("content", data);
                console.log({ event, editor, data });
            }}

        />
        <Button onClick={createNews}>
            Создать новость
        </Button>
    </>)
}

export default CreateNews;