import React from 'react';
import cashBack from './cashBack.jpg';
import shipping from './shipping.jpg';
import support from './support.jpg';
const Services = () => {
  return (
    <div
      style={{
        padding: '40px 0',
        width: '80%',
        marginLeft: '10%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '20px',
      }}
    >
      <div
        style={{
          padding: '30px',
          textAlign: 'center',
          border: '1px solid #000',
          borderRadius: '8px',
        }}
      >
        <img src={shipping} style={{ height: '70px', width: '70px' }} alt="" />
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>
          Free Shipping
        </div>
        <div style={{ fontSize: '15px' }}>For Invoice</div>
        <div style={{ fontSize: '15px' }}>over $1.500</div>
      </div>

      <div
        style={{
          padding: '30px',
          textAlign: 'center',
          border: '1px solid #000',
          borderRadius: '8px',
        }}
      >
        <img src={cashBack} style={{ height: '70px', width: '70px' }} alt="" />
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>
          Cash Back
        </div>
        <div style={{ fontSize: '15px' }}>
          When paying for products <br /> via Dasun Wallet
        </div>
      </div>

      <div
        style={{
          padding: '30px',
          textAlign: 'center',
          border: '1px solid #000',
          borderRadius: '8px',
        }}
      >
        <img src={support} style={{ height: '70px', width: '70px' }} alt="" />
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '15px 0' }}>
          24/7 Support
        </div>
        <div style={{ fontSize: '15px' }}>
          When something goes <br /> wrong
        </div>
      </div>
    </div>
  );
};

export default Services;
