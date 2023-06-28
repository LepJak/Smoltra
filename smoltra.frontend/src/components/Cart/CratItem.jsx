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

    const handleImageError = e => { e.target.src = emptyImage };
    let imageUrl = `https://localhost:7175/api/image/${props.order?.imageId}`;

    const [statePlusButton, setStatePlusButton] = useState(false);
    const [stateMinusButton, setStateMinusButton] = useState(false);

    const handleChange = (event) => {
        if(validateCount(event.target.value) == true)
            props.changeCountInCart(props.order, event.target.value);
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
        let calc = Number(props.order.count) + 1;
        if(validateCount(calc) == true)
            props.changeCountInCart(props.order,calc);
    }
    const removeCount = () => {
        let calc = Number(props.order.count) - 1;
        if(validateCount(calc) == true)
            props.changeCountInCart(props.order,calc);
    }
    const handler = () => {
        props.deleteProductFromCart(props.order.cartItemId);
    }
    return (
        <div className='shadow p-3 mb-5 bg-white rounded' style={{ width: "500px", height: "300px", margin: "10px 30px  10px 30px" }}>
            <Row>
            <Col style={{width:"100%"}} className="text-end" md={1}>
                    <CloseButton onClick={handler} />
                </Col>
            </Row>
            <Row style={{ height: "100%" }} className="align-middle">
                <Col md={5} >
                    <Image width={"150px"} onError={handleImageError} variant="top" src={imageUrl} />
                </Col>
                <Col md={6}>
                    <Row style={{ height: "50%", width: "200px" }} >
                        <Col><div className='text-break' >
                            {props.order.productName}
                        </div>

                        </Col>
                    </Row>
                    <Row style={{ height: "25%" }} >
                        <Col>
                            <Row>
                                <Col className="text-end">
                                    <Button disabled={stateMinusButton} variant="outline-secondary" onClick={removeCount} style={{ width: "2.3rem" }} >-</Button>
                                </Col>
                                <Col className="text-center" >
                                    <Form.Control  type="number" style={{width:'90px', textAlign:'center'}}  value={props.order.count}
                                        onChange={handleChange}>

                                    </Form.Control>
                                </Col>
                                <Col className="text-start">
                                    <Button disabled={statePlusButton}  variant="outline-secondary align-middle" style={{ width: "2.3rem" }} onClick={addCount}>+</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="text-end">
                        <p>{props.order.price} ₽({props.order.totalPrice} ₽)</p>
                    </Row>


                </Col>

                
            </Row>
        </div>
    );
};

export default ProductCard;