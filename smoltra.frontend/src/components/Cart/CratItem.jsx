import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import emptyImage from "../../images/empty_photo.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton';


const handleImageError = e => { e.target.src = emptyImage };

const ProductCard = (props) => {

    return (
        <div className='shadow p-3 mb-5 bg-white rounded' style={{ width: "30rem", height: "20rem", margin: "0.5rem"  }}>
            <Row style={{ height: "100%" }} className="align-middle">
                <Col md={5}>
                    <Image width={"100%"} onError={handleImageError} variant="top" src={emptyImage} />
                </Col>
                <Col md={6}>
                    <Row style={{ height: "50%" , width: "200px" }} >
                        <Col><div className='text-break' >
                        {props.order.name}
                        </div>
                        
                        </Col>
                        </Row>
                    <Row style={{ height:"35%"}} >
                        <Col>
                        <Row>
                            <Col className="text-end">
                                <Button variant="outline-secondary" style={{ width: "2.3rem" }} >-</Button>
                            </Col>
                            <Col>
                                <Form.Control type="number" width="5rem">

                                </Form.Control>
                            </Col>
                            <Col>
                                <Button variant="outline-secondary align-middle" style={{ width: "2.3rem" }}>+</Button>
                            </Col>
                        </Row>
                    </Col>                   
                    </Row>
                    <Row style={{ height: "15%" }} className="text-end">
                        <p>{props.order.price} ₽</p>
                    </Row>


                </Col>

                <Col md={1}>
                   <CloseButton />
                </Col>
            </Row>
        </div>
    );
};

export default ProductCard;