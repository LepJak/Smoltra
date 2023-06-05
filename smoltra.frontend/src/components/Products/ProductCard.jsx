import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emptyImage from "../../images/empty_photo.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const handleImageError = e => { e.target.src = emptyImage };

const ProductCard = (props) => {
    let imageUrl = `https://localhost:7175/api/image/${props.product.imageId}`;

    return (
        <Card style={{ width: '18rem', margin: "0.5rem" }}>
            <NavLink>
                <Card.Img onError={handleImageError} variant="top" src={imageUrl} />
            </NavLink>
            <Card.Body style={{ height: '100%' }} className="">
                <NavLink to={'/products/' + props.product.id}>
                    <Card.Title>{props.product.name}</Card.Title>
                </NavLink>
                <Card.Text className="text-end">
                    {props.product.price} ₽
                </Card.Text>
                <div className="text-end mt-4">
                    <Button variant="primary">Buy</Button>
                </div>

            </Card.Body>
        </Card>
    );
};

export default ProductCard;