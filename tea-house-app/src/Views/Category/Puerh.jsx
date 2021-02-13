import React from 'react';
import {Card, Button} from 'react-bootstrap';
import data from '../../data';
import { LinkContainer } from 'react-router-bootstrap';

export default function Puerh() {
    const puerhTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'puerh'){
            puerhTea.push(item);
        }
    })
    return (
        <div>
            {
                puerhTea.map(product => 
                    <Card style={{ width: '18rem' }}>
                <LinkContainer to={'/products/' + product.id}><Card.Img variant="top" src={product.image}/></LinkContainer>
                <Card.Body>
                <LinkContainer to={'/products/' + product.id}><Card.Title>{product.name}</Card.Title></LinkContainer>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <LinkContainer to={'/products/' + product.id}><Button variant="secondary">View Details</Button></LinkContainer>
                </Card.Body>
                </Card>
                )      
            }
                
        </div>

    )
}