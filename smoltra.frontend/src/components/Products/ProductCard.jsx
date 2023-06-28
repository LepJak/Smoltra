import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emptyImage from "../../images/empty_photo.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { signinRedirect } from '../../services/userService';


const handleImageError = e => { e.target.src = emptyImage };

const ProductCard = (props) => {
    let imageUrl = `https://localhost:7175/api/image/${props.product?.imageId}`;

    var width = props.width ?? '200px';

    console.log(props?.product)
    const deleteProduct = () =>{
        props.deleteProduct(props.product)
    }
    const [stateInCart, setState] = useState(props.inCart);
    let throwState = () =>{
        console.log("1");
        setState(true);
        props.selectCountModalHandle(props.product);
    }
    return (
        <Card style={{ width: width, margin: "0.5rem", padding:'12px',  border: '0.5px solid gray'}}>
            <NavLink to={'/products/' + props.product?.id}>
                <Card.Img style={{width:"100%", height:'150px'}} onError={handleImageError} variant="top" src={imageUrl} />
            </NavLink>
            <Card.Body style={{ height: '100%' }} className="">
                <NavLink to={'/products/' + props.product?.id}>
                    <Card.Title style={{ fontSize:'15px'}}>{props.product?.name}</Card.Title>
                </NavLink>
                <Card.Text className="text-end" style={{padding:'0 0 10px 0', fontSize:'20px'}}>
                    {props.product?.price} ₽
                </Card.Text>
                <div className="text-end mt-4"  style={{ position: 'absolute', height:'auto', width: '100%', top: 'auto', left: '0', bottom: '0', right: '0', margin:'auto'}} >
                    {
                        props.isAdmin == "no"?
                        (<Button  onClick={signinRedirect} variant="primary" style={{width: '100%', height:'40px', borderRadius:'3px'}}>Купить</Button>)
                        :
                        props.isAdmin == null?
                        <></>
                        :
                        props.isAdmin ?
                        (<div><Button href={`/updateProduct/${props?.product?.id}`} style={{width: '50%', height:'40px', borderRadius:'3px'}}>Обновить</Button>
                        <Button variant='danger' onClick={deleteProduct} style={{width: '50%', height:'40px', borderRadius:'3px'}}>Удалить</Button>
                        </div>) 
                        :
                        (!(props.inCart) ?
                        (<Button variant="primary" style={{width: '100%', height:'40px', borderRadius:'3px'}} onClick={throwState}>Купить</Button>) 
                        : (<Button href='/cart' variant="primary" style={{width: '100%', height:'40px', borderRadius:'3px'}}>В корзине</Button>))
                    }
                    
                </div>
                
            </Card.Body>
        </Card>
    );
};

export default ProductCard;