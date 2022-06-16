import React from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = ({ products }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '10px',
        marginTop: '20px',
      }}
    >
      {products.map((product) => (
        <SingleProduct key={product.id} product={product}></SingleProduct>
      ))}
    </div>
  );
};

export default AllProducts;
