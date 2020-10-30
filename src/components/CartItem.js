import React, { useState, useEffect } from 'react';

const CartItem = (props) => {
    const { name, price, id, addToCart, quantity, cart, setCart, getPriceTotal } = props

    //how to get page to rerender on plus and minus?
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

    //don't want this to go below 0, but hitting minus at 1 should cause the page to rerender and the object should be gone
    const minus = (e) => {
        let newCart = cart
        newCart.forEach((x) => {
            if (+x.id === +e.target.name ) x.quantity -= 1;
        })
        setCart(newCart)
        getPriceTotal()
    }


    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <p>{quantity}</p>
            <button onClick={plus} name={id} >+</button>
            <button onClick={minus} name={id} >-</button>
            {/*
            <form onSubmit={submitItem} name={id}>
                <label htmlFor="">Quantity</label><br/>
                <input type="number" min="1" value={input} onChange={handleInputChange} /><br/> 
                <button>Add To Cart</button>
            </form> */}
        </div>
    )
};
export default CartItem;