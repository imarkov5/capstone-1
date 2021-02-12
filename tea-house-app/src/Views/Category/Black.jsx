import React from 'react';
import {Card, Button} from 'react-bootstrap';
import data from '../../data';

export default function Black() {
    const blackTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'black'){
            blackTea.push(item);
        }
    })
    return (
        <div>
            {
                blackTea.map(product => 
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.price}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
                </Card>
                )      
            }
                
        </div>

    )
}
