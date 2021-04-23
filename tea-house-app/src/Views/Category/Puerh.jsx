import React, {useEffect, useState} from 'react';
import {Row, Container} from 'react-bootstrap';
import data from '../../data.json';
import Product from '../../Components/Product';
import axios from 'axios';

export default function Puerh(props) {
    const { onAdd } = props;
    const puerhTea = [];
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
    },[])

    products.forEach((item, index) => {
        if(item.category_id == 5){
            puerhTea.push(item);
        }
    })

    return (
            <div>
                <Container fluid>
                    <Row xs={2} md={3} lg={6}>
                    {
                        puerhTea.map(product => 
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        )    
                    }
                    </Row>
                </Container>                
            </div>
    )
}