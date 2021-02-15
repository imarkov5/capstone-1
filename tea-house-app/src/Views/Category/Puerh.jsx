import React from 'react';
import {Card, Button, Container, Row} from 'react-bootstrap';
import data from '../../data';
import { LinkContainer } from 'react-router-bootstrap';

export default function Puerh(props) {
    const { onAdd } = props;

    const puerhTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'puerh'){
            puerhTea.push(item);
        }
    })
    return (
        <div>
            <Container fluid>
                <Row xs={2} md={3} lg={4}>
            {
                puerhTea.map(product => 
                    <Card style={{ width: '18rem' }}>
                <LinkContainer to={'/products/' + product.id}><Card.Img variant="top" src={product.image}/></LinkContainer>
                <Card.Body>
                <LinkContainer to={'/products/' + product.id}><Card.Title>{product.name}</Card.Title></LinkContainer>
                    <Card.Text>
                    ${product.price.toFixed(2)}
                    </Card.Text>
                    <Button onClick={() => onAdd(product)} variant="outline-success">Add To Cart</Button>
                    <LinkContainer to={'/products/' + product.id}><Button variant="outline-dark">View Details</Button></LinkContainer>
                </Card.Body>
                </Card>
                )      
            }
            </Row>
                </Container>
                
        </div>

    )
}