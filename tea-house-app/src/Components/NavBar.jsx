import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Dropdown } from 'react-bootstrap';

function NavBar(){

    return(
        <nav>
            <ul>
                <li className='push-left'>
                 <Link className="logo" to="/">The Tea House</Link>
                </li>
                <li className='nav-item'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Collections
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="dropdown-menu">
                        <Dropdown.Item href="/all_products">All Collections</Dropdown.Item>
                        <Dropdown.Item href="/green">Green</Dropdown.Item>
                        <Dropdown.Item href="/white">White</Dropdown.Item>
                        <Dropdown.Item href="/yerba">Yerba</Dropdown.Item>
                        <Dropdown.Item href="/puerh">Puerh</Dropdown.Item>
                        <Dropdown.Item href="/black">Black</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>
                <li className='nav-item'>
                    <Link to='/cart' className='nav-links'>
                        Cart
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-in' className='nav-links'>
                        Sign In
                    </Link>
                </li>
            </ul>
    </nav>
    )
}
export default NavBar;