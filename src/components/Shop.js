import React from 'react';
import products from '../products'
import Product from './Product'

const Shop = (props) => {
    const { addToCart, } = props;
    return (
        <div>
            {products.map((x) => {
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