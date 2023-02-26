import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import emptyImage from "../../images/empty_photo.jpg";

const ProductCard = (props) => {
    return (
        <Card style={{ width: '18rem', margin:"0.5rem" }}>
            <Card.Img variant="top" src={props.image ?? emptyImage} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text className="text-end">
                    {props.product.price} ₽
                </Card.Text>
                <div className="text-end">
                <Button variant="primary">Buy</Button>
                </div>                
            </Card.Body>
        </Card>
    );
}
export default ProductCard;