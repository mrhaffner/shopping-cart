import React from 'react';

//name
//price
//add button
//quantity

//some kind of logic for a default quantity of one, clicking only increases the actual items number?
const Product = (props) => {
    const { onSubmit, handleInputChange, quantityInput, name, price, onEdit, id } = props
    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Quantity</label><br/>
                <input type="number" onChange={handleInputChange} value={quantityInput} name='quantityInput' /><br/>
                <button onClick={onEdit} id={id}>Add Item</button>
            </form>
        </div>
    )
};

export default Product;