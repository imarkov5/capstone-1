import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import data from '../../data.json';
import Product from '../../Components/Product';
import axios from 'axios';

export default function Green(props) {
    const { onAdd } = props;
    const greenTea = [];
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
    },[])

    products.forEach((item, index) => {
        if(item.category_id == 1){
            greenTea.push(item);
        }
    })

    return (
            <div>
                <Container fluid>
                    <Row xs={2} md={3} lg={6}>
                    {
                        greenTea.map(product => 
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        )   
                    }
                    </Row>
                </Container>   
            </div>
    )
}

