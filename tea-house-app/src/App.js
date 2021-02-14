import React, { useState } from 'react';
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
import data from './data';

function App() {
  //deconstructing assignment to extract data from data
  const {products} = data;
  //using useState hook to manage cartItems
  const [cartItems, setCartItems] = useState([]);
  //this function is an event handler that accepts a product that has to be added to the card
  const onAdd = (product) => {
    console.log(product);
    // exist is checking cartItems if there is an item (x) with an item id (x.id) that is equal to product.id that need to be added. 
    const exist = cartItems.find((x) => x.id === product.id);
    console.log("exist is" + exist);
    // if exists then find that product in the cartItems and increase the quantity by 1 and then update cartItems in setCartItems
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
        // if there is a product with the same id then spread exist array and increase the qty by 1, if not then add the don't change the new item
        x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
      );
      // if product doesn't exist in the cart then, spread cartItems and the product with the qty of 1
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/all_products">
          {/* passing products (to show all products) and onAdd (to use it on the "Add to Cart" button) to AllProducts.jsx */}
          <AllProducts onAdd={onAdd} products={products}/>
        </Route>
        <Route path="/green">
          <Green/>
        </Route>
        <Route path="/white">
          <White/>
        </Route>
        <Route path="/black">
          <Black/>
        </Route>
        <Route path="/yerba">
          <Yerba/>
        </Route>
        <Route path="/puerh">
          <Puerh/>
        </Route>

        <Route path="/products/:id" component={ProductDetail}>
          <ProductDetail/>
        </Route>
        {/* passing cartItems and onAdd/onRemove functions (+- to remove or add items from the cartItems/exist arrays) to ShoppingCart.jsx */}
        <Route path="/cart">
          <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}/>
        </Route>
      </main>
      <footer>
       <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
