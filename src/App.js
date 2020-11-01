import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import products from './products'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(products)
  }, []);

  const addToCart = (id, quantity) => {
    // let newCart = [...cart]
    // newCart.forEach((x) => {
    //   if (x.id === id) x.quantity += +quantity;
    // });
    setCart(cart.map((x) => {
      if (x.id === id) x.quantity += +quantity;
      return x
    }))
    updateNumItems()
  };

  const [numItems, setNumItems] = useState(0)
  const updateNumItems = () => {
    let total = 0;
    cart.forEach((x) => 
      total += +x.quantity
    );
    setNumItems(total)
  }

  return (
    <Router>
      <div>
          <Navbar numItems={numItems} />
          <Switch>
              <Route path="/shop">
                  <Shop addToCart={addToCart} cart={cart} />
              </Route>
              <Route path="/cart">
                  <Cart  cart={cart} setCart={setCart} updateNumItems={updateNumItems} />
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
