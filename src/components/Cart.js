import React from 'react';

const Cart = (props) => {
    const { getPriceTotal, } = props;
    return (
        <div>
            <h2>Cart!</h2>
            <p>Total Price: ${getPriceTotal()}</p>
        </div>
    );
}

export default Cart;