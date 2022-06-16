import React from 'react';
import productImage from './product.jpg';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
      }}
      className="tech-single-card-wrapper"
    >
      <div className="before-after-hover">
        <div className="before-hover">
          {' '}
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
        </div>
        <div
          className="after-hover"
          style={{
            width: '100%',
            height: '160px',
            backgroundColor: '#F5F5F5',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '15px',
              textAlign: 'center',
              marginBottom: '20px',
              marginTop: '15px',
            }}
          >
            <div
              style={{
                width: '100%',
                backgroundColor: 'black',
                color: '#68D237',
                textAlign: 'center',
                padding: '7px 0',
                borderRadius: '5px',
              }}
            >
              <AiOutlineHeart />
            </div>
            <div
              style={{
                width: '100%',
                backgroundColor: 'black',
                color: '#68D237',
                textAlign: 'center',
                padding: '7px 0',
                borderRadius: '5px',
              }}
            >
              <FiEye />
            </div>
          </div>
          <div className="btn btn-brand w-100">Add To Cart</div>
        </div>
      </div>

      <div className="single-product-description">
        <div
          className="product-title"
          style={{ fontSize: '15px', marginBottom: '10px' }}
        >
          {product.title}
        </div>
        <h5 style={{ fontSize: '15px' }}>$ {product.price}</h5>
        {product.oldPrice && (
          <strike>
            <span style={{ fontSize: '12px', marginTop: '-30px' }}>
              $ {product.oldPrice}
            </span>
          </strike>
        )}
        <div style={{ fontSize: '13px', marginTop: '20px' }}>
          by: <span style={{ color: 'blue' }}>{product.by}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
