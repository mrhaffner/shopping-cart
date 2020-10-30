import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import products from './products'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//state has a cart with all the items in it
  //this can by default have all the products with a quantity of 0 (map from products, use Id and add quantity 0 to object) 
    //or add the products as they are added and remove them (first option is probably easier)
//need a function, maybe state for the total price

//products need a default quantity of one
const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(products)
  }, []);

  const addToCart = (id, quantity) => {
    let newCart = cart
    newCart.forEach((x) => {
      if (x.id === id) x.quantity += +quantity;
    })
    setCart(newCart)
    console.log(cart)
    updateNumItems()

  };

  // const addToCart = (id, quantity) => {
  //   setCart((prevState) => ([
  //     ...prevState,
  //     {
  //       id,
  //       quantity,
  //     }
  //   ]))
  //   console.log(cart)
  // };

  const [numItems, setNumItems] = useState(0)
  const updateNumItems = () => {
    let total = 0;
    cart.forEach((x) => 
      total += +x.quantity
    );
    setNumItems(total)
  }

  // const getNumItems = () => {
  //   let total = 0;
  //   cart.forEach((x) => 
  //     total += +x.quantity
  //   );
  //   return total;
  // };

  const getPriceTotal = () => {
    let priceTotal = 0;
    cart.forEach((x) => {
      let price = products.filter((y) => x.id === y.id)[0].price
      priceTotal += +x.quantity * +price
    })
    return priceTotal;
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
                  <Cart getPriceTotal={getPriceTotal} cart={cart} />
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
