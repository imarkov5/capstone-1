import React from 'react';
import {Row, Container} from 'react-bootstrap';
import data from '../../data';
import Product from '../../Components/Product';

export default function White(props) {
    const { onAdd } = props;
    const whiteTea = [];
    
    data.products.forEach((item, index) => {
        if(item.category == 'white'){
            whiteTea.push(item);
        }
    })

    return (
            <div>
                <Container fluid>
                    <Row xs={2} md={3} lg={6}>
                    {
                        whiteTea.map(product => 
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        )   
                    }
                    </Row>
                </Container>
            </div>
      
    )
}
