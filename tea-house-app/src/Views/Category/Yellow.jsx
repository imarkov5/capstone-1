import React from 'react';
import {Card, Button} from 'react-bootstrap';
import data from '../../data';
import { LinkContainer } from 'react-router-bootstrap';

export default function Yellow() {
    const yellowTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'yellow'){
            yellowTea.push(item);
        }
    })
    return (
        <div>
            {
                yellowTea.map(product => 
                    <Card style={{ width: '18rem' }}>
                <LinkContainer to={'/products/' + product.id}><Card.Img variant="top" src={product.image}/></LinkContainer>
                <Card.Body>
                <LinkContainer to={'/products/' + product.id}><Card.Title>{product.name}</Card.Title></LinkContainer>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <LinkContainer to={'/products/' + product.id}><Button variant="secondary">Add To Cart</Button></LinkContainer>
                </Card.Body>
                </Card>
                )      
            }
                
        </div>

    )
}
