import React from 'react';
import Container from 'react-bootstrap/Container';
import ProductCard from './ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products =(props) => {
    let state = props.productsPage;
    let products = state.products.map(p => <ProductCard product={p}/>)
    return(
        <Container>
             <Row className="justify-content-center">
             {products}
             </Row>         
        </Container>    
    );
}
export default Products;