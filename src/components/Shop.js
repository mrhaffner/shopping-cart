import React from 'react';
import products from '../products'
import Product from './Product'

const Shop = (props) => {
const { onSubmit, handleInputChange, quantityInput, } = props;
  return (
    <div>
      {products.map((x) => {
          return (
              <div key={x.id}>
                  <Product onSubmit={onSubmit} handleInputChange={handleInputChange} quantityInput={quantityInput} name={x.name} price={x.price}   />
              </div>
          )
      })}
    </div>
  );
};

export default Shop;