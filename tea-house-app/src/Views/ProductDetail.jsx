import React from 'react';
import {Figure} from 'react-bootstrap';
import data from '../data';

export default function Product(props) {
    
    return (
        
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src='#'
        />
        <Figure.Caption>
            Product Detail page
        </Figure.Caption>
        </Figure>
    )
}
