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
      <div
        style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '12px', marginTop: '30px' }}>Asus</div>
        <div style={{ fontSize: '15px', marginTop: '5px', fontWeight: 'bold' }}>
          Supper Sale
        </div>
        <div style={{ fontSize: '15px', marginTop: '5px', fontWeight: 'bold' }}>
          Laptop Gaming
        </div>
        <button className="btn btn-brand" style={{ marginTop: '310px' }}>
          Order Now
        </button>
      </div>
      <div style={{}}>
        <div
          style={{
            height: '330px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
            padding: '30px',
          }}
        >
          <div style={{ fontSize: '12px', marginTop: '25px' }}>New Product</div>
          <div
            style={{ fontSize: '20px', marginTop: '15px', fontWeight: 'bold' }}
          >
            HAND WATCH
          </div>
          <div
            style={{ fontSize: '20px', marginTop: '15px', fontWeight: 'bold' }}
          >
            ROSSINI
          </div>
          <button className="btn btn-brand" style={{ marginTop: '100px' }}>
            Buy Now
          </button>
        </div>
        <div
          style={{
            height: '160px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10px',
          }}
        >
          <div
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              padding: '25px 15px',
            }}
          >
            <div style={{ fontSize: '12px', marginTop: '10px' }}>wine</div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Drunkennedd
            </div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Deep Flavor
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              padding: '25px 15px',
            }}
          >
            <div style={{ fontSize: '12px', marginTop: '10px' }}>Consmetic</div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              MAXIMI
            </div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Sale 50%
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              padding: '25px 15px',
            }}
          >
            <div style={{ fontSize: '12px', marginTop: '10px' }}>Sunglass</div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Authentic
            </div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Sale of 50%
            </div>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            height: '160px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
            padding: '25px 15px',
          }}
        >
          <div style={{ fontSize: '12px', marginTop: '10px' }}>Big Deal</div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
          >
            Black Friday
          </div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
          >
            Buy 1 Get 1
          </div>
        </div>
        <div
          style={{
            height: '160px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            borderRadius: '10px',
            padding: '25px 15px',
          }}
        >
          <div style={{ fontSize: '12px', marginTop: '10px' }}>Fujiwa</div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
          >
            ION Alkaline
          </div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
          >
            Micronutrient
          </div>
          <div
            style={{
              fontSize: '14px',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
          >
            Supplements
          </div>
        </div>
        <div
          style={{
            height: '160px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '10px',
          }}
        >
          <div
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              padding: '25px 15px',
            }}
          >
            <div style={{ fontSize: '12px', marginTop: '10px' }}>Hand Wash</div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Clean hands
            </div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Clean bacteria
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#F5F5F5',
              borderRadius: '10px',
              padding: '25px 15px',
            }}
          >
            <div style={{ fontSize: '12px', marginTop: '10px' }}>Fashion</div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Nice Bag
            </div>
            <div
              style={{
                fontSize: '14px',
                marginTop: '10px',
                fontWeight: 'bold',
              }}
            >
              Nice Style
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
