import React, {useState} from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';
import Product from '../Components/Product';
import {Row, Container} from 'react-bootstrap';


export default function AllProducts(props) {
    // passed products and onAdd in App.js and deconstructing them here
    const {products, onAdd} = props;
    const [search, setSearch] = useState("")

    const filteredProducts = products.filter((product) => {
        if (
            product.name.toLowerCase().includes(search) ||
            product.s_number.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.price.toFixed(2).toString().includes(search)
        
        ) {
            return product;
        }
    })
    return (
        <div>
            <Navbar className="bg-light justify-content-between">
                <Form inline>
                </Form>
                <Form inline>
                <Form.Control className="float-right" type="text" placeholder="Name, Serial #, Price" className="mr-sm-2" onChange={(e) => {
                    setSearch(e.target.value.toLowerCase());
                }}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
            <div>
            <Container fluid>
                <Row xs={2} md={3} lg={6}>
                {/* mapping through products array to display all product items and passing it to Product component */}
                {filteredProducts.length == 0 ? "NO SEARCH RESULTS." :
    
                filteredProducts.map((product) => (
                    // added product and onAdd to pass it to Product component
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    
                ))}
                </Row>
                </Container>
            </div>
        </div>
    )
}