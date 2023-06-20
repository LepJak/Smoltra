import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ProductCard from './ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productApi } from '../../api/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emptyImage from "../../images/empty_photo.jpg";
import wastebasket from "../../images/wastebasket.png";

const Products = (props) => {


    const getImageUrl = (uid) => {
        let imageUrl = `https://localhost:7175/api/image/${uid}`;
        return imageUrl;
    }


    const [stateModal, setShow] = useState({
        "showModal": false,
        "product": null
    });

    const handle = (product) => {
        console.log(props);
        props.addProductInCart(product.id);
        setShow(
            {
                "showModal": true,
                "product": product
            });

    };
    const handleClose = () => {
        setShow(
            {
                "showModal": false,
                "product": null
            });
    }
    let state = props.productsPage;


    const handleImageError = e => { e.target.src = emptyImage };
    state.products.forEach(x=>{
        //console.log(x.id);
        //console.log(props.productsGuidFromCart[0]);
        //console.log(x.id == props.productsGuidFromCart[0]);
        
    }        
        )
    let products = state.products
        .map(p => {
            let inCart = props.productsGuidFromCart.find(x => x == p.id);
            //console.log(inCart);
            //console.log(`${p.id}`);
            //console.log(props.productsGuidFromCart);
            return (<ProductCard product={p} selectCountModalHandle={handle} inCart={inCart} />)

        });
        console.log(props.auth?.role)
    return (
        <Container>
            <Modal show={stateModal.showModal} size="lg"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered animation={false} onClose={() => setShow({
                    "showModal": false,
                    "product": null
                })}>
                <Modal.Header closeButton>
                    <Modal.Title><p style={{ fontSize: '20px' }}>Товар успешно добавлен в корзину.</p></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <img style={{ width: '10rem' }} onError={handleImageError} variant="top" src={getImageUrl(stateModal.product?.imageId)} />
                        </Col>
                        <Col md={7}>
                            <p style={{ margin: '20px', fontSize: '20px' }}>{stateModal.product?.name}{stateModal.product?.name}{stateModal.product?.name}</p>
                        </Col>

                        <Col lg={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button style={{ left: "auto", right: "auto", width: "90%", minHeight: "2.5rem", minWidth: "3rem", height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img style={{ width: '1rem' }} src={wastebasket} /></Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Продолжить покупки</Button>
                    <a href='https://sa.ru'><Button variant="primary">В корзину</Button></a>
                </Modal.Footer>
            </Modal>
            <Row className="justify-content-center">
                {
                    
                    props.auth?.role == "Admin" &&
                    <Button>Добавить товар</Button>
                }
                
                {products}
            </Row>
        </Container>
    );
}
export default Products;