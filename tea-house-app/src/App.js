import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import HomePage from './Views/HomePage';
import AllProducts from './Views/AllProducts';
import Green from './Views/Category/Green';
import White from './Views/Category/White';
import Black from './Views/Category/Black';
import Puerh from './Views/Category/Puerh';
import Yerba from './Views/Category/Yerba';
import ProductDetail from './Views/ProductDetail';
import ShoppingCart from './Views/ShoppingCart';
import Admin from './Views/Admin';
import NewProduct from './Views/NewProduct';
import UpdateProduct from './Views/UpdateProduct';
import data from './data.json';
import axios from 'axios';


const LocalStorageCart = JSON.parse(localStorage.getItem('cartItems') || '[]')

function App() {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[])


  const [cartItems, setCartItems] = useState(LocalStorageCart);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id ? {...exist, qty: exist.qty + 1} : item)
      );
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id ? {...exist, qty: exist.qty - 1} : item)
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar cartItemsQuantity={cartItems.length}/>
      </header>
      <main>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/all_products">
          <AllProducts 
          onAdd={onAdd} 
          products={products}
          />
        </Route>
        <Route path="/green">
          <Green onAdd={onAdd}/>
        </Route>
        <Route path="/white">
          <White onAdd={onAdd}/>
        </Route>
        <Route path="/black">
          <Black
          onAdd={onAdd}
          products={products}
          />
        </Route>
        <Route path="/yerba">
          <Yerba onAdd={onAdd}/>
        </Route>
        <Route path="/puerh">
          <Puerh onAdd={onAdd}/>
        </Route>

        <Route path="/admin">
          <Admin/>
        </Route>

        <Route path="/add_product">
          <NewProduct/>
        </Route>

        <Route path="/products/:id">
          <ProductDetail onAdd={onAdd} products={products}/>
        </Route>

        <Route path="/update_product/:prodId">
          <UpdateProduct products={products}/>
        </Route>
        
        <Route path="/cart"
          render={({history}) =>
          <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          history={history}
          />}
          />
      </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;