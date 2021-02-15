import React from 'react';
import {Card, Button, Row, Container} from 'react-bootstrap';
import data from '../../data';
import { LinkContainer } from 'react-router-bootstrap';

export default function Green(props) {
    const { onAdd } = props;
    const greenTea = [];
    data.products.forEach((item, index) => {
        if(item.category == 'green'){
            greenTea.push(item);
        }
    })
    return (
    

            <div>

                <Container fluid>
                <Row xs={2} md={3} lg={4}>
                {
                    greenTea.map(product => 
                        
                        <Card style={{ width: '20rem' }}>
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

