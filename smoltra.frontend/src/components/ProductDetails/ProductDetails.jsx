import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import emptyImage from '../../images/empty_photo.jpg'
import { Image, ListGroup, ListGroupItem } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from "react-bootstrap";
import Specifications from "./Specifications";
import axios from "axios";


const ProductDetails = (props) => {

    //TODO: Вынести зависимость от строки!!!!
    const getImagePath = (imageId) => {
        if(imageId === null || imageId==='')
            return null;
        return `https://localhost:7175/api/image/${imageId}`;
    }

    const handleImageError = e => {
        e.target.style.display = 'none'
    };
    
    let state = props.productDetailsPage;
    let images = state?.product?.images?.map(i => <ListGroupItem><Image width="100%" onError={handleImageError} src={getImagePath(i?.id)} /></ListGroupItem>);
    debugger;
    return (
        <div>
            <Container>
                <Row>
                    <Col height="70%">
                        <Row>
                            <Col md={1} sm={1} style={{ height: "20em", width: "30%", maxWidth: "150px" }} className="text-top">
                                <ListGroup style={{ overflowX: "auto", height: "20rem" }}>
                                    {images}
                                </ListGroup>
                            </Col>
                            <Col md={5} style={{ width: '50%' }} className="text-center"><Image style={{ width: '100%', margin: "0.5rem" }} src={getImagePath(state.product?.generalImageId) ?? emptyImage} /></Col>
                        </Row>
                    </Col>

                    <Col md={4} >
                        <Row style={{ fontSize: '3rem' }}>{state.product?.name}</Row>
                        <Row>
                            <Col className="text-end" style={{ fontSize: '2rem' }}>{state.product?.price} ₽</Col>
                            <Col md="auto" className="text-end" style={{ width: "100%" }}>
                                <Button className="m-1 px-5 py-3" variant="primary">Купить</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="description" title="Описание">
                            {state.product.description}
                        </Tab>
                        <Tab eventKey="specifications" title="Характеристики">
                            <Specifications specificationsGroup={state.product.specificationGroups} />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>

    )
}

export default ProductDetails;