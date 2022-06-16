import React from 'react';
import productImage from './product.jpg';
const SingleProduct = ({ product }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: ' 200px 1fr',
        gridGap: '20px',
      }}
    >
      <div>
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
          - {product.discount}%
        </span>
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
      </div>
      <div>
        <div style={{ fontSize: '12px' }}>{product.title}</div>
        <div style={{ margin: '5px 0' }}>
          <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
            {product.price}
          </span>{' '}
          <strike>
            <span style={{ fontSize: '12px', marginLeft: '30px' }}>
              {product.oldPrice}
            </span>
          </strike>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '10px',
            marginBottom: '5px',
          }}
        >
          <div>Sold: {product.sold}</div>
          <div>In Stock: {product.inStock}</div>
        </div>
        <div
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '5px',
            backgroundColor: '#F5F5F5',
          }}
        ></div>
        <div
          style={{
            width: `${product.soldPercentage}%`,
            height: '8px',
            borderRadius: '5px',
            backgroundColor: '#479622',
            marginTop: '-8px',
          }}
        ></div>
        <div className="time-wrapper mt-3">
          <div>
            {' '}
            <span className="time-indicator">123</span> :{' '}
            <span className="time-indicator">42</span> :{' '}
            <span className="time-indicator">00</span> :{' '}
            <span className="time-indicator">08</span>{' '}
          </div>
          <div style={{ fontSize: '12px', marginTop: '10px' }}>
            <span style={{ marginLeft: '15px' }}>day</span>
            <span style={{ marginLeft: '30px' }}>Hour</span>
            <span style={{ marginLeft: '28px' }}>Min</span>
            <span style={{ marginLeft: '28px' }}>Sec</span>
          </div>
        </div>
        <div className="btn btn-brand w-100" style={{ marginTop: '14px' }}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
