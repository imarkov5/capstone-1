import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

export default function UpdateProduct(){

    const {prodId} = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [category_id, setCategoryId] = useState(1);
    const [description, setDescription] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [quantity, setQuantity] = useState();

    let history = useHistory();

    const updateProduct = event => {
        event.preventDefault();
        console.log(prodId)
        axios.put(`http://localhost:8080/products/update/${prodId}`, {prodId, name, description, serialNumber, price, quantity, imageUrl, category_id})
        .then(response => history.push("/admin"))
    }

    return(
        <div>
         <Form className="w-50" onSubmit={updateProduct}>
         <h1>Update Product</h1>
          <Form.Group>
            <Form.Control placeholder="Product Name" onChange={e=>setName(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="category" as="select" onChange={e=>setCategoryId(e.target.value)}>
              <option value="1">Green</option>
              <option value="2">White</option>
              <option value="3">Black</option>
              <option value="4">Yerba</option>
              <option value="5">Puerh</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Price" onChange={e=>setPrice(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Quantity" onChange={e=>setQuantity(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Serial Number" onChange={e=>setSerialNumber(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Description" as="textarea" rows={3} onChange={e=>setDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Image URL" onChange={e=>setImageUrl(e.target.value)}/>
          </Form.Group>
          <Button type="submit" variant="outline-dark" size="lg" text-align="right" block>Update Product</Button>
        </Form>   
        </div>
    )
}