import React, {useState, useEffect} from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import data from '../data.json';
import {useParams} from 'react-router-dom'; 
import axios from 'axios';

export default function ProductDetail(props) {
    const {onAdd} = props;
    const {id} = useParams();
    
    const [product, setProduct] = useState({createdAt: null, description: "", id: 0, imageUrl: "", name: "", price: 0, quantity: 0, serialNumber: "", updatedAt: null});
    useEffect(()=>{
        console.log(id)
        axios.get(`http://localhost:8080/products/id/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        console.log(product);
      },[]);

      return (
        <div>
            <Row className="justify-content-md-center">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Serial Number: {product.serialNumber}</ListGroupItem>
                    <ListGroupItem>Price: ${product.price.toFixed(2)}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => onAdd(product)} variant="outline-success" size="md">Add To Cart</Button>
                    <LinkContainer to="/all_products"><Button variant="outline-secondary">Continue Shopping</Button></LinkContainer>
                </Card.Body>
                </Card>
            </Row>       
       </div>
    )
}
