import React from 'react';
import CartItem from './CartItem'

const Cart = (props) => {
    const { getPriceTotal, } = props;
    return (
        <div>
            <h2>Cart!</h2>
            {/* {products.map((x) => {
                return (
                    <div key={x.id}>
                        
                    </div>
                )
            })} */}
            <p>Total Price: ${getPriceTotal()}</p>
        </div>
    );
}

export default Cart;