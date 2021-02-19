import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

export default function Checkout({CartTotalPrice}) {

    return (
        <div>
          <br/>
          
          <Form>
            <Row>
            <Col className="border">
            
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

          </Col>
          
          <Col className="border px=2rem py=2rem">
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
      </Col>
      </Row>
          <Button variant="warning" size="lg" type="submit" className="my-5">
            Checkout
          </Button>
        </Form>
      </div>
    )
}


