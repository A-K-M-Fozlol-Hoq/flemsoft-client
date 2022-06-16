import React from 'react';
import productImage from './product.jpg';
const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div style={{}}>
      {product.isNew && (
        <span
          style={{
            color: '#fff',
            backgroundColor: '#68D237',
            fontSize: '10px',
            padding: '3px 10px',
            borderRadius: '2px',
            position: 'relative',
            zIndex: '2',
            marginLeft: '5px',
          }}
        >
          New
        </span>
      )}
      {product.isFavorite && (
        <span
          style={{
            color: '#000',
            backgroundColor: '#FFE923',
            fontSize: '10px',
            padding: '3px 10px',
            borderRadius: '2px',
            position: 'relative',
            zIndex: '2',
            marginLeft: '5px',
          }}
        >
          Favorite
        </span>
      )}
      {product.disCount && (
        <span
          style={{
            color: '#fff',
            backgroundColor: '#FF8154',
            fontSize: '10px',
            padding: '3px 10px',
            borderRadius: '2px',
            position: 'relative',
            zIndex: '2',
            marginLeft: '5px',
          }}
        >
          -{product.disCount}%
        </span>
      )}
      {product.isSoldOut && (
        <span
          style={{
            color: '#000',
            backgroundColor: '#D6D6D6',
            fontSize: '10px',
            padding: '3px 10px',
            borderRadius: '2px',
            position: 'relative',
            zIndex: '2',
            marginLeft: '5px',
          }}
        >
          Sold Out
        </span>
      )}
      {product.isNew ||
      product.isFavorite ||
      product.disCount ||
      product.isSoldOut ? (
        <img
          src={productImage}
          style={{
            width: '100%',
            borderRadius: '10px',
            zIndex: '1',
            marginTop: '-25px',
            position: 'relative',
          }}
          alt=""
        />
      ) : (
        <img
          src={productImage}
          style={{ width: '100%', borderRadius: '10px', zIndex: '1' }}
          alt=""
        />
      )}

      <div
        style={{ fontSize: '15px', marginTop: '10px', marginBottom: '10px' }}
      >
        {product.title}
      </div>
      <h5 style={{ fontSize: '15px' }}>$ {product.price}</h5>
      <div style={{ fontSize: '13px' }}>
        by: <span style={{ color: 'blue' }}>{product.by}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
