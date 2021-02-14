import React from 'react';
// import {Figure} from 'react-bootstrap';
import data from '../data';

export default function ProductDetail(props) {
    
    
    const product = data.products.find(x => x.id == window.location.pathname.substring(10));
    console.log(window.location.pathname.substring(10));

    return (
        
        <div>Product Detail page
            
                <h1>{product.name}</h1>
                <p>{product.description}</p>
               <div><img src={product.image}/></div>
                
        
       </div>
    )
}
