import React from 'react';
import data from '../data';
import {Link} from "react-router-dom";

export default function AllProducts() {
    return (
        <div>
            <ul>
                {
                    data.products.map(product =>
                        <li>
                            <img src={product.image}/>
                            <Link to="/">{product.name}</Link>
                            <p>${product.price}</p>
                        </li>)
                }
            </ul>
        </div>

        // <div className="my-3 ml-5">
        //     <div className="mb-3 d-flex justify-content-center">
        //         <div className="category">
        //             <Link to="/green"><img src="https://www.stylist.co.uk/images/app/uploads/2019/04/21103217/poetry-quotes-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress" alt=""/></Link>
        //             <Link className="text-secondary" to="/green"><h3>Green</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="white"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple30/v4/64/ad/38/64ad38a0-d65b-cc68-c9e8-409adcf049e5/source/256x256bb.jpg" alt=""/></Link>
        //             <Link className="text-secondary" to="/white"><h3>White</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="/black"><img src="https://www.stylist.co.uk/images/app/uploads/2019/04/21103217/poetry-quotes-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress" alt=""/></Link>
        //             <Link className="text-secondary" to="/black"><h3>Black</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="/oolong"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple30/v4/64/ad/38/64ad38a0-d65b-cc68-c9e8-409adcf049e5/source/256x256bb.jpg" alt=""/></Link>
        //             <Link className="text-secondary" to="/oolong"><h3>Oolong</h3></Link>
        //         </div>
        //     </div>
        //     <div className="d-flex justify-content-center">
        //         <div className="category">
        //             <Link to="/puerh"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple30/v4/64/ad/38/64ad38a0-d65b-cc68-c9e8-409adcf049e5/source/256x256bb.jpg" alt=""/></Link>
        //             <Link className="text-secondary" to="/puerh"><h3>Pu'erh</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="/yerba"><img src="https://www.stylist.co.uk/images/app/uploads/2019/04/21103217/poetry-quotes-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress" alt=""/></Link>
        //             <Link className="text-secondary" to="/yerba"><h3>Yerba</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="/herbal"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple30/v4/64/ad/38/64ad38a0-d65b-cc68-c9e8-409adcf049e5/source/256x256bb.jpg" alt=""/></Link>
        //             <Link className="text-secondary" to="/herbal"><h3>Herbal</h3></Link>
        //         </div>
        //         <div className="category">
        //             <Link to="/yellow"><img src="https://www.stylist.co.uk/images/app/uploads/2019/04/21103217/poetry-quotes-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress" alt=""/></Link>
        //             <Link className="text-secondary" to="/yellow"><h3>Yellow</h3></Link>
        //         </div>
        //     </div>
        // </div>
    )
}
