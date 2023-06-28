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
import { useSelector } from "react-redux";
import {signinRedirect} from "../../services/userService"

const ProductDetails = (props) => {

    const signin =() =>{
        signinRedirect()
    }
    const auth = useSelector(state => state.authReducer?.auth);
    //TODO: Вынести зависимость от строки!!!!
    const getImagePath = (imageId) => {
        if (imageId === null || imageId === '')
            return null;
        return `https://localhost:7175/api/image/${imageId}`;
    }

    const addProductInCart = () => {
        props.addProductsInCart(state.product?.id)
    }
    const handleImageError = e => {
        e.target.style.display = 'none'
    };
    const inCart = () => {
        let item = props.productsGuidFromCart.find(x => x == state.product?.id);
        return item != null;
    }
    let state = props.productDetailsPage;
    console.log(state?.product);
    let images = state?.product?.images?.map(i => <ListGroupItem onClick={()=>{props.swapImage(i?.id)}}><Image width="100%" onError={handleImageError} src={getImagePath(i?.id)} /></ListGroupItem>);
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
                            {
                                auth.role == "Admin"?
                                (<></>)
                                :
                                auth.user == null ?
                                    (<Col md="auto" className="text-end" style={{ width: "100%" }}>
                                        <Button onClick={signin} className="m-1 px-5 py-3" variant="primary">Купить</Button>
                                    </Col>)
                                    :
                                    inCart() == true ?
                                        (<Col md="auto" className="text-end" style={{ width: "100%" }}>
                                            <Button className="m-1 px-5 py-3" href='/cart' variant="primary">В корзине</Button>
                                        </Col>)
                                        :
                                        (<Col md="auto" className="text-end" style={{ width: "100%" }}>
                                            <Button onClick={addProductInCart} className="m-1 px-5 py-3" variant="primary">Купить</Button>
                                        </Col>)
                            }

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
                            <Specifications specificationGroups={state.product.specificationGroups} />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>

    )
}

export default ProductDetails;