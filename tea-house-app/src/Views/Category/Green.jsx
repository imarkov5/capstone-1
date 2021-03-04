import React from 'react';
import {Row, Container} from 'react-bootstrap';
import data from '../../data';
import Product from '../../Components/Product';

export default function Green(props) {
    const { onAdd } = props;
    const greenTea = [];
    
    data.products.forEach((item, index) => {
        if(item.category == 'green'){
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

