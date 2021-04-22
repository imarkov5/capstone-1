import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="home-page">
            <Link to="/admin"><div className="axiom">
                <h3>A CUP OF TEA</h3>
                <h2>MAKES EVERYTHING</h2>
                <h1>BETTER</h1> 
           </div></Link>
        </div>
    )
}
