import React from 'react';
import {Row, Col, Container, Table, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements }  from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/CheckoutForm';

export default function ShoppingCart(props) {

    const {cartItems, onAdd, onRemove, history} = props;
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
                            <td><Image thumbnail src={item.imageUrl} alt="product image"/></td>
                            <LinkContainer to={'/products/' + item.id} style={{cursor : "pointer"}}><td>{item.name}</td></LinkContainer>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.qty > item.quantity ? `Sorry only ${item.quantity} left in stock`: item.qty}</td>
                            <td>
                            <Link onClick={() => onAdd(item)}>Add</Link> | <Link onClick={() => onRemove(item)}>Remove</Link>
                            </td>
                            <td>${item.qty > item.quantity ? (item.quantity*item.price).toFixed(2) : (item.price*item.qty).toFixed(2)}</td>
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
                    <>
                    <hr/>
                    <Elements stripe={loadStripe(
                    'pk_test_51IMNQ7LBIsTrc0hCyQNqQrrx0Bb0iPbg4tvda6ahnJgNQiGlYLBP6zyWGuEXkephc9YkygzHD3A4eqXvjnFS1v8W002caSvZx7',
                    )}>
                        <CheckoutForm history={history}/>
                    </Elements>
                    </>
                </Container>
                )}         
        </div>                
    )
}
