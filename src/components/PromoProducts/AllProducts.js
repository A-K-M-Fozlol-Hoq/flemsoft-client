import React from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = ({ products }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30px',
      }}
    >
      {products.map((product) => (
        <SingleProduct key={product.id} product={product}></SingleProduct>
      ))}
    </div>
  );
};

export default AllProducts;
