import React, { useState } from 'react';

const Product = (props) => {
    const { name, price, id } = props

    const[input, setInput] = useState(1)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const submitItem = (e) => {
        e.preventDefault();
        console.log(input);
        console.log(e.target.name)
        setInput(1);
    }
    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <form onSubmit={submitItem} name={id}>
                <label htmlFor="">Quantity</label><br/>
                <input type="number" min="1" value={input} onChange={handleInputChange} /><br/> 
                <button>Add To Cart</button>
            </form>
        </div>
    )
};
export default Product;