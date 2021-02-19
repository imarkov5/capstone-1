import React from 'react';
import {Row, Col, Button, Container, Table, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from '../Components/Checkout';

export default function ShoppingCart(props) {
    //passed the props from App.jsx
    const {cartItems, onAdd, onRemove} = props;

    // using reduce function to calculate total price of all products in the cartItems array, setting default value to 0
    const CartTotalPrice = cartItems.reduce((accumulator, current_item) => accumulator + current_item.price * current_item.qty, 0);

    
    return (
    <div>   
        <div className="row my-5 mr-2 ml-2">
            <Link className="btn btn-outline-secondary" to="/all_products">&#x2190; Continue Shopping</Link>
            <hr/>
        </div>
            <div>{cartItems.length === 0 && <h2>Your Cart is Empty</h2>}</div>

            {cartItems.length !==0 && (
            <Table borderless hover size="lg">
                <thead>
                    <tr className="text-left">
                        <td></td>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Change Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
            
            {cartItems.map((item) => (
                <tbody key={item.id} className="justify-content-md-center border">
                    <tr className="text-left">
                        <td><Image thumbnail src={item.image} alt="product image"/></td>
                    <LinkContainer to={'/products/' + item.id} style={{cursor : "pointer"}}><td>{item.name}</td></LinkContainer>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.qty > item.quantity ? `Sorry only ${item.quantity} left in stock`: item.qty}</td>
                        <td>
                        <Link onClick={() => onAdd(item)}>Add</Link> | <Link onClick={() => onRemove(item)}>Remove</Link>
                        </td>
                        <td>${(item.price*item.qty).toFixed(2)}</td>
                    </tr>
                </tbody>
                ))}
            </Table>
            )}

            <br/>
            {cartItems.length !==0 && (
            <Container>
                <Row>
                    <Col md={{ span: 5, offset: 10 }}><strong>Total Price: ${CartTotalPrice.toFixed(2)}</strong></Col>
                </Row>
                <br/>

                <Checkout CartTotalPrice={CartTotalPrice}/>
                {/* <Row>
                    <Col md={{ span: 5, offset: 10 }}><LinkContainer to="/checkout"><Button variant="warning" size="lg">Checkout</Button></LinkContainer></Col>
                </Row> */}
            </Container>
            )}

    </div>                

    )
}
