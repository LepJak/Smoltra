import React, { useState, ChangeEvent, useRef, } from 'react';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Stack from '@mui/material/Stack';
import "./style.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateNews = (props) => {
    const state = props.updateNewsPage
    let config = {
        language: "ru"
    }
    const navigate = useNavigate();
    console.log(props)
    const changeField = (e) => {
        // debugger;
        props.changeValueField(e.target.id, e.currentTarget.value)

    }
    const updateNews = () =>{
        props.updateNews(state?.news)
        navigate("/news")
    }
    const deleteNews = () =>{
        props.deleteNews(state?.news?.id)
        navigate("/news")
    }

    return (<>
        <h2>Обновление новости</h2>
        <Stack>
            <TextField
                id="title"
                label="Название новости"
                style={{ margin: "10px" }}
                value={state?.news?.title}
                onChange={changeField}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                id="annotation"
                label="Пояснение"
                rows="5"
                onChange={changeField}
                value={state?.news?.annotation}
                multiline
                style={{ margin: "10px" }}
                InputLabelProps={{ shrink: true }} />
        </Stack>
        <h3>
            Контент новости
        </h3>
        <CKEditor

            // config={config}
            editor={ClassicEditor}
            style={{ margin: "10px" }}
            data={state?.news?.content ?? ""}
            onChange={(event, editor) => {
                const data = editor.getData();
                props.changeValueField("content", data);
                console.log({ event, editor, data });
            }}
        />
        
        <Stack direction={"row"} style={{ margin:"10px"}} spacing={2} useFlexGap flexWrap="wrap" 
  justifyContent="center"
  alignItems="center">
            <Button style={{ width: "100%",maxWidth: "25%"  }} variant='danger' onClick={deleteNews}>Удалить</Button>
            <Button variant='secondary' style={{ maxWidth: "25%" , width: "100%"}}>Отмена</Button>
            <Button variant='success' onClick={updateNews}  style={{ width: "100%",maxWidth: "28%" }}>Обновить</Button>
        </Stack>
    </>)
}

export default UpdateNews;