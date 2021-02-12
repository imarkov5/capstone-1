import React from 'react';
import {Figure} from 'react-bootstrap';

export default function Product() {
    return (
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="../Images/Black_Blueberry"
        />
        <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
        </Figure>
    )
}
