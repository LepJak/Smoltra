import { React, useState } from 'react';
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

    const [count, setCount] = useState(props.order.count);

    const [statePlusButton, setStatePlusButton] = useState(false);
    const [stateMinusButton, setStateMinusButton] = useState(false);

    const handleChange = (event) => {
        if(validateCount(event.target.value) == true)
            setCount(event.target.value);
    };
    const validateCount = (count) =>{
        if(count >= 1000){
            setStatePlusButton(true);
            
            return false;
        }
        else
            setStatePlusButton(false);
        if(count <= 0){
            setStateMinusButton(true);
            
            return false;
        }
        else
            setStateMinusButton(false);
        return true;
    }
    const addCount = () => {
        let calc = Number(count) + 1;
        if(validateCount(calc) == true)
            setCount(calc);
    }
    const removeCount = () => {
        let calc = Number(count) - 1;
        if(validateCount(calc) == true)
            setCount(calc);
    }
    const handler = () => {
        props.deleteProductFromCart(props.order.cartItemId);
    }
    return (
        <div className='shadow p-3 mb-5 bg-white rounded' style={{ width: "30rem", height: "20rem", margin: "0.5rem" }}>
            <Row style={{ height: "100%" }} className="align-middle">
                <Col md={5}>
                    <Image width={"100%"} onError={handleImageError} variant="top" src={emptyImage} />
                </Col>
                <Col md={6}>
                    <Row style={{ height: "50%", width: "200px" }} >
                        <Col><div className='text-break' >
                            {props.order.productName}
                        </div>

                        </Col>
                    </Row>
                    <Row style={{ height: "35%" }} >
                        <Col>
                            <Row>
                                <Col className="text-end">
                                    <Button disabled={stateMinusButton} variant="outline-secondary" onClick={removeCount} style={{ width: "2.3rem" }} >-</Button>
                                </Col>
                                <Col>
                                    <Form.Control  type="number" style={{width:'90px', textAlign:'center'}}  value={count}
                                        onChange={handleChange}>

                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button disabled={statePlusButton}  variant="outline-secondary align-middle" style={{ width: "2.3rem" }} onClick={addCount}>+</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ height: "15%" }} className="text-end">
                        <p>{props.order.price} ₽</p>
                    </Row>


                </Col>

                <Col md={1}>
                    <CloseButton onClick={handler} />
                </Col>
            </Row>
        </div>
    );
};

export default ProductCard;