import React from 'react';
import {Card, Button, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Product(props) {
    //Product is a functional component that get used in AllProducts.jsx. It gets props from AllProducts.jsx
    // deconstructing product and onAdd from the props that came from AllProducts.jsx (passing props: App ->AllProducts -> Product)
    const {product, onAdd} = props;

    
    return (
        <div>
            
                <Card style={{ width: '15rem' }} className="card">
                    <LinkContainer to={`products/${product.id}`}><Card.Img variant="top" src={product.image}/></LinkContainer>
                    <Card.Body>
                    <LinkContainer to={`products/${product.id}`}><Card.Title>{product.name}</Card.Title></LinkContainer>
                        <Card.Text>
                        ${product.price.toFixed(2)}
                        </Card.Text>
                        {/* Using onCLick handler to pass onAdd function with the product */}
                        <Button onClick={() => onAdd(product)} variant="outline-success" size="sm">Add To Cart</Button>
                        <LinkContainer to = {`products/${product.id}`}><Button variant="outline-dark" size="sm">View Details</Button></LinkContainer>
                        {/* <LinkContainer to={{ pathname: '/products/${product.id', state: { item: product} }}>View Details</LinkContainer> */}
                    </Card.Body>
                </Card>
            
        </div>
    )
}
