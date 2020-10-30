import React from 'react';
import Product from './Product'

const Shop = (props) => {
    const { addToCart, cart } = props;
    return (
        <div>
            {cart.map((x) => {
                return (
                    <div key={x.id}>
                        <Product addToCart={addToCart} name={x.name} price={x.price} id={x.id} />
                    </div>
                )
            })}
        </div>
    );
};

export default Shop;