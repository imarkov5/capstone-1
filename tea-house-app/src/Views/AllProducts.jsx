import React from 'react';
import data from '../data';
import {Card, Button, Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function AllProducts(props) {
    
    return (
        <Row>
        <Col xs={6} md={4}>
            {
                data.products.map(product => 
                    <Card key={product.id} style={{ width: '18rem' }}>
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
        </Col>
        </Row>
    )
}
