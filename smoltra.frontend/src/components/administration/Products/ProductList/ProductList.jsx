import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ProductList = (props) => {
    let state = props.productsPage;
    let products = state?.products?.map(p => 
    <tr>
        <td>{p.id}</td>
        <td>{p.name}</td>
        <td style={{ width: '5rem', margin:"0.5rem" }}><Button variant='outline-info'>Изменить</Button></td>
        <td style={{ width: '5rem', margin:"0.5rem" }}><Button variant='outline-danger'>Удалить</Button></td>
    </tr>);
    return (
        <Table striped >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Наименование</th>                    
                </tr>
            </thead>
            <tbody>
                {products}
            </tbody>
        </Table>
    );
}
export default ProductList;