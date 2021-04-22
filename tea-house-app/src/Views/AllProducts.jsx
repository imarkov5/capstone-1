import React, {useState} from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';
import Product from '../Components/Product';
import {Row, Container} from 'react-bootstrap';


export default function AllProducts(props) {

    // retrieveAllProducts(){
    //     AllProductService.executeAllProductsService()
    //     .then(response => console.log(response))
    // }

    const {products, onAdd} = props;
    const [search, setSearch] = useState("")

    const filteredProducts = products.filter((product) => {
        if (
            product.name.toLowerCase().includes(search) ||
            product.serialNumber.toLowerCase().includes(search) ||
            // product.getCategory.toLowerCase().includes(search) ||
            product.price.toFixed(2).toString().includes(search)
        
        ) {
            return product;
        }
    })

    return (
        <div>
            {/* This is the react-bootstrap navbar that I'm using for styling the search bar - not NavBar component */}
            <Navbar className="bg-light justify-content-between">
                {/* Put an empty react-bootstrap form just for styling so that Search is on the right */}
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
                    {filteredProducts.length == 0 ?
                        "NO SEARCH RESULTS."
                        :
                        filteredProducts.map((product) => (
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    ))}
                </Row>
            </Container>
            </div>

        </div>
    )
}