import React from 'react';

const Declaration = () => {
  return (
    <div
      style={{
        width: '80%',
        marginLeft: '10%',
        padding: '40px 0 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '30PX',
      }}
    >
      <div
        style={{
          padding: '30px',
          backgroundColor: '#F5F5F5',
          borderRadius: '10px',
        }}
      >
        <div className="p-4"></div>
        <div style={{ fontSize: '12px' }}>Hot Deal</div>
        <h5 style={{ marginTop: '12px', fontSize: '17px' }}>TOURS SAFE</h5>
        <h5 style={{ marginTop: '12px', fontSize: '17px' }}>TRUE DISCOUNT</h5>
        <div className="btn btn-brand mt-4">Order Now</div>
      </div>
      <div
        style={{
          padding: '30px',
          backgroundColor: '#F5F5F5',
          borderRadius: '10px',
        }}
      >
        <div className="p-4"></div>
        <div style={{ fontSize: '12px' }}>New Product</div>
        <h5 style={{ marginTop: '12px', fontSize: '17px' }}>
          EXPERIENCE TECHNOLOGY
        </h5>
        <h5 style={{ marginTop: '12px', fontSize: '17px' }}>RELAX HIGHTLY</h5>
        <div className="btn btn-brand mt-4">Order Now</div>
      </div>
    </div>
  );
};

export default Declaration;
