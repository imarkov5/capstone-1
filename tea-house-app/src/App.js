import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import HomePage from './Views/HomePage';
import AllProducts from './Views/AllProducts';
import Green from './Views/Category/Green';
import White from './Views/Category/White';
import Oolong from './Views/Category/Oolong';
import Black from './Views/Category/Black';
import Puerh from './Views/Category/Puerh';
import Yellow from './Views/Category/Yellow';
import Yerba from './Views/Category/Yerba';
import Herbal from './Views/Category/Herbal';

function App() {
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
          <AllProducts/>
        </Route>
        <Route path="/green">
          <Green/>
        </Route>
        <Route path="/white">
          <White/>
        </Route>
        <Route path="/oolong">
          <Oolong/>
        </Route>
        <Route path="/black">
          <Black/>
        </Route>
        <Route path="/yerba">
          <Yerba/>
        </Route>
        <Route path="/herbal">
          <Herbal/>
        </Route>
        <Route path="/puerh">
          <Puerh/>
        </Route>
        <Route path="/yellow">
          <Yellow/>
        </Route>
      </main>
      <footer>
       <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
