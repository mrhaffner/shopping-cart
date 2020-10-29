import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//state has a cart with all the items in it
  //this can by default have all the products with a quantity of 0 (map from products, use Id and add quantity 0 to object) 
    //or add the products as they are added and remove them (first option is probably easier)
//need a function, maybe state for the total price

//products need a default quantity of one
const App = () => {
  const [cart, setCart] = useState([])

  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
              <Route path="/shop">
                  <Shop />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
