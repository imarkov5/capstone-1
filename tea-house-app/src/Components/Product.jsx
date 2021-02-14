import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Product(props) {
    //Product is a functional component that get used in AllProducts.jsx. It gets props from AllProducts.jsx
    // deconstructing product and onAdd from the props that came from AllProducts.jsx (passing props: App ->AllProducts -> Product)
    const {product, onAdd} = props;
    return (
        <div>
        <Row>
            <Col xs={4} md={3}> 
                <Card style={{ width: '18rem' }} className="card">
                    <LinkContainer to={'/products/' + product.id}><Card.Img variant="top" src={product.image}/></LinkContainer>
                    <Card.Body>
                    <LinkContainer to={'/products/' + product.id}><Card.Title>{product.name}</Card.Title></LinkContainer>
                        <Card.Text>
                        ${product.price}
                        </Card.Text>
                        {/* Using onCLick handler to pass onAdd function with the product */}
                        <Button onClick={() => onAdd(product)} variant="primary">Add To Cart</Button>
                        <LinkContainer to = {`products/${product.id}`}><Button variant="secondary">View Details</Button></LinkContainer>
                        {/* <LinkContainer to={{ pathname: '/products/${product.id', state: { item: product} }}>View Details</LinkContainer> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    )
}
