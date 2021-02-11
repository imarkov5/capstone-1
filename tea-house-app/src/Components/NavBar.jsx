// import Dropdown from './Dropdown';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Dropdown } from 'react-bootstrap';

function NavBar(){
    // const [dropdown, setDropdown] = useState(false);

    // const onMouseEnter = () => {
    //     setDropdown(true);
    // }
    // const onMouseLeave = () => {
    //     setDropdown(false);
    // }

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

                    <Dropdown.Menu>
                        <Dropdown.Item href="/all_products">All Products</Dropdown.Item>
                        <Dropdown.Item href="/green">Green</Dropdown.Item>
                        <Dropdown.Item href="/white">White</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>
                <li className='nav-item'>
                      <Link to='/contact-us' className='nav-links'>
                          Contact Us
                      </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-in' className='nav-links'>
                        Sign In
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/cart' className='nav-links'>
                        Cart
                    </Link>
                </li>
            </ul>
    </nav>
    )
}
export default NavBar;