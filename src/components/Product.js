import React from 'react';

//some kind of logic for a default quantity of one, clicking only increases the actual items number?
const Product = (props) => {
    const { onSubmit, handleInputChange, quantityInput, name, price, id } = props
    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <form onSubmit={onSubmit} id={id}>
                <label htmlFor="">Quantity</label><br/>
                <input type="number" onChange={handleInputChange} value={quantityInput} name='quantityInput' /><br/>
                <button>Add To Cart</button>
            </form>
        </div>
    )
};

export default Product;