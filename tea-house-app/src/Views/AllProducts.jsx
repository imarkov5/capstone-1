import React, { useState } from 'react';
import Product from '../Components/Product';
import {Row, Container} from 'react-bootstrap';


export default function ProductDetail(props) {
    // passed products and onAdd in App.js and deconstructing them here
    const {products, onAdd} = props;

    
    return (
            <div>
                <Container fluid>
                <Row xs={2} md={3} lg={6}>
                {/* mapping through products array to display all product items and passing it to Product component */}
                {products.map((product) => (
                    // added product and onAdd to pass it to Product component
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
                </Row>
                </Container>
            </div>
    )
}
