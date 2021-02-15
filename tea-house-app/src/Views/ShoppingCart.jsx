import React from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row, Container, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function ShoppingCart(props) {
    //passed the props from App.jsx
    const {cartItems, onAdd, onRemove} = props;
    // using reduce function to calculate total price of all products in the cartItems array, setting default value to 0
    const TotalPrice = cartItems.reduce((accumulator, current_item) => accumulator + current_item.price * current_item.qty, 0);
    console.log("CartItems"+ cartItems);
    return (
        <div>
            {cartItems.length !==0 && (
                        <>
                        <hr/>
                        <div><strong>Total Price</strong></div>
                        <div><strong>{TotalPrice.toFixed(2)}</strong></div>
                        </>
                    )}
                    <hr/>
            <Container fluid>
                {/* Conditional rendering to check if cartItems array is empty */}
                <div>{cartItems.length === 0 && <h2>Your Cart is Empty</h2>}</div>
                <Row xs={2} md={3} lg={4}>
                
                    {cartItems.map((item) => ( 
                        
                        <Card style={{ width: '20rem' }}>
                    <LinkContainer to={'/products/' + item.id}><Card.Img variant="top" src={item.image}/></LinkContainer>
                    <Card.Body>
                    <LinkContainer to={'/products/' + item.id}><Card.Title>{item.name}</Card.Title></LinkContainer>
                        <Card.Text>
                        {item.qty} X {item.price.toFixed(2)}
                        </Card.Text>
                        <Button  onClick={() => onAdd(item)} variant="outline-success">Add</Button>
                        <Button onClick={() => onRemove(item)} variant="outline-dark">Remove</Button>
                    </Card.Body>
                    </Card>
                    )  
                    )
                    
                    }
                
                </Row>
                </Container>
                

            {/* Conditional rendering to check if cartItems array is empty */}
            {/* <div>{cartItems.length === 0 && <h2>Your Cart is Empty</h2>}</div> */}
            {/* mapping through cartItems to display values of items from the cartItems objects */}
                {/* {cartItems.map((item) => ( */}
                    
                     {/* setting key here to prevent error */}
                    
                    
                        {/* <div key={item.id}>{item.name}</div>
                     
                         
                        <div> */}
                            {/* toFixed function formats a number using fixed-point notation */}
                            {/* {item.qty} X {item.price.toFixed(2)} */}
                        {/* </div>
                       
                           
                        <div>
                            <button onClick={() => onAdd(item)}>
                                Add
                            </button>
                            <button onClick={() => onRemove(item)}>
                                Remove
                            </button>
                        </div> */}
                        
         
                        
                        
                    
    
                {/* ))} */}
              
                {/* {cartItems.length !==0 && (
                        <>
                        <hr/>
                        <div><strong>Total Price</strong></div>
                        <div><strong>{TotalPrice.toFixed(2)}</strong></div>
                        </>
                    )} */}
                    
        </div>
    )
}
