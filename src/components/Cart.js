import React, { useState, useEffect } from 'react';
import CartItem from './CartItem'

const Cart = (props) => {
    const { updateNumItems } = props;
    const [priceTotal, setPriceTotal] = useState(0)

    const getPriceTotal = () => {
        let price = 0;
        cart.forEach((x) => {
            price += x.price * x.quantity;
        })
        setPriceTotal(price)
    }

    useEffect(() => {
        getPriceTotal()
        updateNumItems()
      });

    const {  cart, setCart, } = props;
    return (
        <div>
            <h2>Cart!</h2>
            {cart.map((x) => {
                if (x.quantity > 0) {
                    return (
                        <div key={x.id}>
                            <CartItem name={x.name} price={x.price} id={x.id} quantity={x.quantity} cart={cart} setCart={setCart} getPriceTotal={getPriceTotal}  />
                        </div>
                    )
                } else { return null }
            })}
            <p>Total Price: ${priceTotal}</p>
            <button>Check Out</button>
        </div>
    );
}

export default Cart;