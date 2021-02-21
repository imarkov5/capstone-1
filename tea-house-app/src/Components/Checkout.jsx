import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements }  from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


export default function Checkout() {
  
    return (
        <div>
          <br/>
          
          <Form>
            {/* <Row>
            <Col> */}
            
          <Row><h6 className="float-left">Shipping Address:</h6></Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label className="float-left">Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label className="float-left">Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="float-left">City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="float-left">State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="float-left">Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Check className="float-left" inline label="Same as Billing Address"/>
          <br/>
          <br/>
          {/* </Col>
          
          <Col> */}
          <Row><h6 className="float-left">Billing Address:</h6></Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label className="float-left">Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label className="float-left">Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="float-left">City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="float-left">State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="float-left">Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
      {/* </Col>
      </Row> */}
          <Button variant="outline-info" type="submit" className="my-5">
            Use this address
          </Button>
        </Form>
        <>
        <hr/>
        <Elements stripe={loadStripe(
          'pk_test_51IMNQ7LBIsTrc0hCyQNqQrrx0Bb0iPbg4tvda6ahnJgNQiGlYLBP6zyWGuEXkephc9YkygzHD3A4eqXvjnFS1v8W002caSvZx7',
        )}>
          <CheckoutForm/>
        </Elements>
        </>
      </div>
    )
}


