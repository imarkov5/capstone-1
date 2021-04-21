import React, { useEffect, useState } from 'react';
import {Row, Container} from 'react-bootstrap';
import data from '../../data.json';
import Product from '../../Components/Product';
import axios from 'axios';

export default function Black(props) {
    const { products, onAdd } = props;
    const blackTea = [];
    
    products.forEach((item, index) => {
        if(item.category_id == 2){
            blackTea.push(item);
        }
    })
    
    return (
            <div>
                <Container fluid>
                    <Row xs={2} md={3} lg={6}>
                    {
                        blackTea.map(product => 
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        )                    
                    }
                    </Row>
                </Container>    
            </div>
    )
}