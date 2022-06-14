import React from 'react';
import realEstate from './realEstate.jpg';
import technoogy from './technoogy.jpg';
import watch from './watch.jpg';
import glasses from './glasses.jpg';
import cosmetic from './cosmetic.jpg';
import food from './food.jpg';
import './FeaturedProducts.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const FeaturedProducts = () => {
  return (
    <div
      className="featured-products-wrapper"
      style={{ width: '80%', marginLeft: '10%' }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '10px',
          justifyContent: 'space-between',
        }}
      >
        <h5>Shop BY Categories</h5>
        <div style={{ display: 'flex' }}>
          <span className="txt-brand">See All</span>
          <div>
            <FiChevronLeft
              style={{
                color: '#858585',
                marginLeft: '60px',
                marginRight: '10px',
              }}
            />
            <FiChevronRight />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6,1fr)',
          gridGap: '10px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={realEstate}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Real Estate</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={technoogy}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Technology</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={watch} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Watch</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={glasses} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Glasses</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={cosmetic}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Cosmetic</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={food} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>
            Food <br /> High Grade
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
