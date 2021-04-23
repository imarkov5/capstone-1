import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Table, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then(response =>
      setProducts(response.data))
    .catch(error => console.log(error))
    
  },[])
  
  
  const deleteProduct = (prodId) => {
      // event.preventDefault();
      console.log(prodId);
      axios.delete("http://localhost:8080/products/delete/" + prodId)
      .then(response => {
        if(response.data != null){
          alert("Product deleted successfully!");
        }
      })
  }




    return(
        <div>
          <LinkContainer to = {"/add_product"}><Button variant="outline-dark" size="lg" text-align="right" block>Add Product</Button></LinkContainer>
<Table striped bordered hover variant="dark">
  
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Serial #</th>
      <th>Category</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {products.map((product) => 
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.serialNumber}</td>
{(() => {
  switch (product.category_id){
    case 1 : return <td>Green</td>;
    case 2 : return <td>White</td>;
    case 3 : return <td>Black</td>;
    case 4 : return <td>Yerba</td>;
    case 5 : return <td>Puerh</td>;
  }
})()}
  
      <td>{product.createdAt}</td>
      <td>{product.updatedAt}</td>
      
      <td>
      <LinkContainer to={`/products/${product.id}`}><Button variant="outline-info" size="sm">View</Button></LinkContainer>
      <LinkContainer to={`/update_product/${product.id}`}><Button variant="outline-warning" size="sm">Update</Button></LinkContainer>      
      <Button variant="outline-danger" size="sm" onClick = {()=> deleteProduct(product.id)}>Delete</Button>
    
      </td>
    </tr>
    )} 
  </tbody>
</Table>
       </div>
    )
}