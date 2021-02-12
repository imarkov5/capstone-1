import React from 'react';
import {Card, Button} from 'react-bootstrap';
import data from '../../data';
import { LinkContainer } from 'react-router-bootstrap';

export default function White() {
    const whiteTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'white'){
            whiteTea.push(item);
        }
    })
    return (
        <div>
            {
                whiteTea.map(product => 
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
