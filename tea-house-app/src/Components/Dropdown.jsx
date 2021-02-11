import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {DropdownItems} from './DropdownItems';

export default function Dropdown() {
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // return (
    //     <>
    //       <ul onClick={handleClick}
    //       className={click ? 'dropdown-clicked' : 'dropdown'}
    //       >
    //       {DropdownItems.map((category, index) => {
    //           return(
    //               <li key={index}>
    //                   <Link 
    //                     className={category.className}
    //                     to={category.path}
    //                     onClick={() => setClick(false)}
    //                     >
    //                     {category.categoryName}
    //                   </Link>
    //               </li>
    //           )
    //       })}
    //       </ul>  
    //     </>
    // )
}
