import React from 'react';

const NewProducts = () => {
  return (
    <div
      style={{
        padding: '40px 35px',
        display: 'grid',
        gridTemplateColumns: '240px 1fr 360px',
        gridGap: '15px',
        height: '580px',
      }}
    >
      <div style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}></div>
      <div style={{}}>
        <div
          style={{
            height: '330px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
          }}
        ></div>
        <div
          style={{
            height: '160px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10px',
          }}
        >
          <div
            style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
          ></div>
          <div
            style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
          ></div>
          <div
            style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
          ></div>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            height: '160px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
          }}
        ></div>
        <div
          style={{
            height: '160px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
          }}
        ></div>
        <div
          style={{
            height: '160px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '10px',
          }}
        >
          <div
            style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
          ></div>
          <div
            style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
