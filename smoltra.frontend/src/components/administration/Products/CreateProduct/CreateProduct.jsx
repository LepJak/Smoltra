import React, { useState, ChangeEvent, useRef, } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ProductGroupSpecificationCreateTemplate from './ProductGroupSpecificationCreateTemplate';
import Stack from '@mui/material/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';

const CreateProduct = (props) => {
    let state = props.createProductPage;
    let config = {
        language: "ru"
    }
    const [selectedImages, setSelectedImage] = useState([]);
    const [productInfo, setProductInfo] = useState({
        name: "",
        price: null,
        description: ""
    })

    const createNewProduct =()=>{
        props.createProductaaaaaa(productInfo, selectedImages,state.specificationGroups);
    }
    const changeName = (e) =>{
        setProductInfo({
            name: e.currentTarget.value,
            price: productInfo.price,
            description: productInfo.description
        });
    }
    const changePrice = (e) =>{
        setProductInfo({
            name: productInfo.name,
            price: e.currentTarget.value,
            description: productInfo.description
        });
    }
    const changeDescription = (e) =>{
        setProductInfo({
            name: productInfo.name,
            price: productInfo.price,
            description: e.currentTarget.value
        });
    }
    const inputRef = useRef(null);

    const handleUploadClick = () => {
        // 👇 We redirect the click event onto the hidden input element
        inputRef.current?.click();
    };
    const handleFileChange = (e) => {
        if (!e.target.files) {
            return;
        }
        addImage(e.target.files[0]);
        document.getElementById("image-uploader").value = null;
    }

    let specGourps = state.specificationGroups?.map(sG =>
        <ProductGroupSpecificationCreateTemplate changeSpecValue={props.changeSpecificationValue} changeSpecGroupName={props.changeNameSpecificationGroup} addSpecification={props.createSpecification} specGroup={sG} />
    );

    const addImage = (file) => {
        let image = URL.createObjectURL(file);
        setSelectedImage([...selectedImages, {src: image, image:file}])
        //console.log(file);
        console.log(selectedImages);
    }

    const deleteImage = (img) => {
        console.log("!!!!!!");
        let findedImage = selectedImages.find(x => x == img);
        if (findedImage != null) {
            ; const index = selectedImages.indexOf(findedImage);
            if (index > -1) { // only splice array when item is found
                selectedImages.splice(index, 1);
                setSelectedImage([...selectedImages]); // 2nd parameter means remove one item only
            }
        }
    }
    let images = selectedImages?.map(x =>
        <ImageItem image={x} deleteImage={deleteImage} />
    );
    return (
        <>
            <h2>Добавление товара</h2>
            <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Общая информация</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Stack>
                                <TextField
                                    id="standard-number"
                                    label="Наименование товара"
                                    style={{ margin: "10px" }} 
                                    onChange={changeName}/>
                                <TextField
                                    id="standard-number"
                                    label="Цена"
                                    type="number"
                                    onChange={changePrice}

                                    style={{ margin: "10px" }} />
                            </Stack>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Описание</Accordion.Header>
                    <Accordion.Body>
                        <TextField
                            id="standard-number"
                            style={{ margin: "10px", width: "100%" }}
                            multiline
                            rows={20}
                            onChange={changeDescription}
                        />


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Добавление изображения</Accordion.Header>
                    <Accordion.Body >
                        <Row md={10}>
                            <Col md="auto" style={{ display: 'flex', marginTop: 'auto', marginBottom: '20px', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                                <Button onClick={handleUploadClick} style={{ minHeight: "215px", height: "100%", width: "100%", minWidth: "221.6px" }}>+</Button>
                            </Col>
                            <Col xl={"auto"} lg={8} md={7} style={{ display: 'flex' }}>
                                <Stack style={{ overflowX: "auto", width: "53rem" }} direction="row" spacing={2}>
                                    {images}
                                </Stack>
                            </Col>

                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Характеристики</Accordion.Header>
                    <Accordion.Body>
                        <Button style={{ width: "100%", margin: "10px 0 10px 0" }} onClick={props.createSpecificationGroup}>Добавить группу</Button>
                        {specGourps}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button variant="success" onClick={createNewProduct} style={{ width: "100%", margin: "10px 0 10px 0" }} >Добавить товар</Button>
            <input
                id="image-uploader"
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </>
    );
}



const ImageItem = (props) => {
    const deleteImage = () => {
        props.deleteImage(props.image)
    }
    return (
        <div style={{ border: "1px solid black" }}>
            {console.log("Selected")}
            <img
                style={{ height: "200px", width: "200px", margin: "10px" }}
                alt="not found"

                src={props.image.src}
            />
            <br />
            <Button variant="danger" style={{ width: "100%" }} onClick={deleteImage}>Удалить</Button>
        </div>
    )


}

export default CreateProduct;
{/* <CKEditor
config={config }
editor={ClassicEditor}
data="<p>Hello from CKEditor 5!</p>"
onReady={editor => {
    // You can store the "editor" and use when it is needed.
    console.log('Editor is ready to use!', editor);
}}
onChange={(event, editor) => {
    const data = editor.getData();
    console.log({ event, editor, data });
}}
onBlur={(event, editor) => {
    console.log('Blur.', editor);
}}
onFocus={(event, editor) => {
    console.log('Focus.', editor);
}}
/> */}