import React from 'react';

const CartItem = (props) => {
    const { name, price, id, quantity, cart, setCart, getPriceTotal } = props

    const plus = (e) => {
        let newCart = cart
        console.log(newCart)
        newCart.forEach((x) => {
            if (+x.id === +e.target.name) x.quantity += 1;
        })
        
        console.log(e.target.name)
        setCart(newCart)
        getPriceTotal()
    }

    const minus = (e) => {
        let newCart = cart
        newCart.forEach((x) => {
            if (+x.id === +e.target.name ) x.quantity -= 1;
        })
        setCart(newCart)
        getPriceTotal()
    }

    const removeItem = (e) => {
        let newCart = cart
        newCart.forEach((x) => {
            if (+x.id === +e.target.name ) x.quantity = 0;
        })
        setCart(newCart)
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