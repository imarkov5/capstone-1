import React from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row, Container, Col, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default function ShoppingCart(props) {
    //passed the props from App.jsx
    const {cartItems, onAdd, onRemove} = props;

    // using reduce function to calculate total price of all products in the cartItems array, setting default value to 0
    const CartTotalPrice = cartItems.reduce((accumulator, current_item) => accumulator + current_item.price * current_item.qty, 0);

    return (
    <div>   
        <div className="row my-5 mr-2 ml-2">
            <div className="col-lg-2">
            <Link className="btn btn-outline-secondary" to="/all_products">&#x2190; Continue Shopping</Link>
            </div>
            <hr/>
        </div>
            <div>{cartItems.length === 0 && <h2>Your Cart is Empty</h2>} </div>
            <Row className="justify-content-md-center">
                    <Col><strong>Item</strong></Col>
                    <Col><strong>Price</strong></Col>
                    <Col><strong>Qty</strong></Col>
                    <Col><strong>Change Qty</strong></Col>
                    <Col><strong>Subtotal</strong></Col>
            </Row>
            {cartItems.map((item) => (
            <Row className="justify-content-md-center border">
                    <Col>{item.name}</Col>
                    <Col>${item.price.toFixed(2)}</Col>
                    <Col>{item.qty}</Col>
                    <Col>
                    <Link onClick={() => onAdd(item)}>Add</Link> | <Link onClick={() => onRemove(item)}>Remove</Link>
                    </Col>
                    <Col>${(item.price*item.qty).toFixed(2)}</Col>
            </Row>
            ))}
            {cartItems.length !==0 && (

            <div className="float-right my-5 mr-5"><strong>Total Price: ${CartTotalPrice.toFixed(2)}</strong></div>

            
)}
    </div>                

    )
}
