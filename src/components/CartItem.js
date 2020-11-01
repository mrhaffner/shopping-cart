import React from 'react';

const CartItem = (props) => {
    const { name, price, id, quantity, cart, setCart, getPriceTotal } = props

    const plus = (e) => {
        setCart(cart.map((x) => {
            if (+x.id === +e.target.name) x.quantity += 1;
            return x;
        }))
        getPriceTotal()
    }

    const minus = (e) => {
        setCart(cart.map((x) => {
            if (+x.id === +e.target.name) x.quantity -= 1;
            return x;
        }))
        getPriceTotal()
    }

    const removeItem = (e) => {
        setCart(cart.map((x) => {
            if (+x.id === +e.target.name) x.quantity = 0;
            return x;
        }))
        getPriceTotal()
    }

    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <p>{quantity}</p>
            <button onClick={plus} name={id}>+</button>
            <button onClick={minus} name={id}>-</button>
            <button onClick={removeItem} name={id}>Remove Item</button>
        </div>
    )
};
export default CartItem;