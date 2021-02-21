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
import data from './data';


//after application loads: fetching cartItems from the local storage and parsing it back to the array, providing the key 'cartItems'. If there's nothing in local storage then set it as an empty array.
const LocalStorageCart = JSON.parse(localStorage.getItem('cartItems') || '[]')

function App() {
  //deconstructing assignment to extract data from data
  const {products} = data;

  //using useState hook to manage cartItems, where initial state would be fetched from the LocalStorage
  const [cartItems, setCartItems] = useState(LocalStorageCart);

  //wherever cartItems array changed useEffect hook reruns after something changes in [cartItems]
  useEffect(() => {
    // putting items in local storage with first argument as a key and second as a string. Using stringify to convert array to string.
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  //this function is an event handler that accepts a product that has to be added to the card
  const onAdd = (product) => {

    // exist is checking cartItems if there is an item (x) with an item id (x.id) that is equal to product.id that need to be added. 
    const exist = cartItems.find((item) => item.id === product.id);

    // if exists then find that product in the cartItems and increase the quantity by 1 and then update cartItems in setCartItems
    if(exist) {
      setCartItems(
        cartItems.map((item) =>
        // if there is a product with the same id then spread exist array and increase the qty by 1, if not then don't change the new item
        item.id === product.id ? {...exist, qty: exist.qty + 1} : item)
      );
      // if product doesn't exist in the cart then, spread cartItems and the product with the qty of 1
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  // onRemove function takes a product as a parameter and checks it against cartItems
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if(exist.qty === 1){
      // if there's only one item in exist then remove it from the cartItems by filtering setCartItems (filter method creates new array taking only items which have id that doesn't equal to product.id))
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }else{
      // if the quantity is more than 1 then decrease it by one
      setCartItems(
        cartItems.map((item) =>
        // mapping through the cartItems, spreading exist to decrease quantity if product id is the same as item id in the cartItems, otherwise leaving the item as it is
        item.id === product.id ? {...exist, qty: exist.qty - 1} : item)
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* cartItemsQuantity to pass the length of the cartItems to navbar */}
        <NavBar cartItemsQuantity={cartItems.length}/>
      </header>
      <main>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="/all_products">
          {/* passing products (to show all products) and onAdd (to use it on the "Add to Cart" button) to AllProducts.jsx */}
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
          <Black onAdd={onAdd}/>
        </Route>
        <Route path="/yerba">
          <Yerba onAdd={onAdd}/>
        </Route>
        <Route path="/puerh">
          <Puerh onAdd={onAdd}/>
        </Route>

        <Route path="/products/:id">
          <ProductDetail onAdd={onAdd}/>
        </Route>

        {/* passing cartItems and onAdd/onRemove functions (+- to remove or add items from the cartItems/exist arrays) to ShoppingCart.jsx */}
        <Route path="/cart">
          <ShoppingCart
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          />
        </Route>
      </main>

      <footer>
       <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
