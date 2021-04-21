import React, {useState, useEffect} from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import data from '../data.json';
import {useParams} from 'react-router-dom'; 
import axios from 'axios';

export default function ProductDetail(props) {
    // const {products, onAdd} = props;
    const {onAdd} = props;
    const {id} = useParams();
    
    
    const [product, setProduct] = useState({createdAt: null, description: "From China, this tea is going to have a sweet and floral aroma.", id: 5, imageUrl: "https://cdn.shopify.com/s/files/1/0092/4424/6052/products/organic-jasmine-tea-z_1024x1024@2x.jpg?v=1601069260", name: "White", price: 6.55, quantity: 10, serialNumber: "0005", updatedAt: null});
    useEffect(()=>{
        console.log(id)
        axios.get(`http://localhost:8080/products/id/${id}`)
        // .then(response=>console.log(response))
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        console.log(product);
      },[]);
    //   console.log(product);
      
    //   const product = products.filter(p => p.id ==id)[0];
    
    

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
                {/* <ListGroupItem>Category: {product.category}</ListGroupItem>
                <ListGroupItem>Category: {product.getCategory()}</ListGroupItem> */}
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
