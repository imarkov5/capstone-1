import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Product(props) {
    
    const {product, onAdd} = props;

    return (
        <div>
            
            <Card style={{ width: '100%' }}>
                <LinkContainer to={`products/${product.id}`} style={{cursor : "pointer"}}><Card.Img variant="top" src={product.imageUrl}/></LinkContainer>
                <Card.Body>
                <LinkContainer to={`products/${product.id}`} style={{cursor : "pointer"}}><Card.Title>{product.name}</Card.Title></LinkContainer>
                    <Card.Text>
                    ${product.price.toFixed(2)}
                    </Card.Text>
                    <Button onClick={() => onAdd(product)} variant="outline-success" size="sm">Add To Cart</Button>
                    <LinkContainer to = {`products/${product.id}`}><Button variant="outline-dark" size="sm">View Details</Button></LinkContainer>
                </Card.Body>
            </Card>
            
        </div>
    )
}
