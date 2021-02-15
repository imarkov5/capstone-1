import React from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap';
import data from '../data';

export default function ProductDetail(props) {
    
    
    const product = data.products.find(x => x.id == window.location.pathname.substring(10));
    console.log(window.location.pathname.substring(10));

    const {onAdd} = props;

    return (
        
        <div>
            <Row className="justify-content-md-center">
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Category: {product.category}</ListGroupItem>
                <ListGroupItem>Serial Number: {product.s_number}</ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Button onClick={() => onAdd(product)} variant="outline-success" size="lg">Add To Cart</Button>
            </Card.Body>
            </Card>
            </Row>       
       </div>
    )
}
