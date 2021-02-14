import React from 'react';
import Product from '../Components/Product';

export default function ProductDetail(props) {
    // passed products and onAdd in App.js and deconstructing them here
    const {products, onAdd} = props;
    return (
            <div>
                {/* mapping through products array to display all product items and passing it to Product component */}
                {products.map((product) => (
                    // added product and onAdd to pass it to Product component
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
    )
}
