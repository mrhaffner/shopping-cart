import React, { useState } from 'react';

const CartItem = (props) => {
    // const { name, price, id, addToCart, } = props

    // const[input, setInput] = useState('1')

    // const handleInputChange = (e) => {
    //     setInput(e.target.value)
    // }
    
    // const submitItem = (e) => {
    //     e.preventDefault();
    //     console.log(input);
    //     console.log(e.target.name)
    //     // needs to pass name/id and input to a function which adds it to cart
    //     addToCart(e.target.name, input);
    //     setInput('1');
    // }
    return (
        <div>
            {/* <p>{name}</p>
            <p>${price}</p>

            <form onSubmit={submitItem} name={id}>
                <label htmlFor="">Quantity</label><br/>
                <input type="number" min="1" value={input} onChange={handleInputChange} /><br/> 
                <button>Add To Cart</button>
            </form> */}
        </div>
    )
};
export default CartItem;