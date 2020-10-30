import React from 'react';
import CartItem from './CartItem'

const Cart = (props) => {
    const { getPriceTotal, cart, } = props;
    return (
        <div>
            <h2>Cart!</h2>
            {cart.map((x) => {
                if (x.quantity > 0) {
                    return (
                        <div key={x.id}>
                            <CartItem name={x.name} price={x.price} id={x.id} />
                        </div>
                    )
                }
            })}
            <p>Total Price: ${getPriceTotal()}</p>
            <button>Check Out</button>
        </div>
    );
}

export default Cart;