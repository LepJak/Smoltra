import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import emptyImage from '../../images/empty_photo.jpg'
import { Image } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from "react-bootstrap";
import Specifications from "./Specifications";

const ProductDetails = (props) => {
    let state = props.productDetailsPage;  
    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center"><Image style={{ width: '24rem', margin: "0.5rem" }} src={state.product?.image ?? emptyImage} /></Col>
                    <Col>
                        <Row style={{ fontSize: '3rem' }}>{state.product?.name}</Row>
                        <Row>
                            <Col className="text-end" style={{ fontSize: '2rem' }}>{state.product?.price} ₽</Col>
                            <Col md="auto">
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
                            <Specifications specificationsGroup={state.product.specificationsGroup}/>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>

    )
}

export default ProductDetails;