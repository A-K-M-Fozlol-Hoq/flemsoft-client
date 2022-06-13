import React from 'react';
import './Footer.css';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { BiEnvelope } from 'react-icons/bi';
const Footer = () => {
  return (
    <div style={{ background: '#000', color: '#fff' }}>
      <div
        style={{
          width: '80%',
          marginLeft: '10%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          paddingTop: '50px',
          paddingBottom: '20px',
        }}
      >
        <div>
          <p>Contact</p>
        </div>
        <div>
          <p>Cooperation - Association</p>
        </div>
        <div>
          <p>Customer Service</p>
        </div>
        <div></div>
      </div>
      <div
        style={{
          width: '80%',
          marginLeft: '10%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          paddingBottom: '80px',
          fontSize: '12px',
        }}
      >
        <div>
          <div>ftrite Co., LTd</div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <IoLocationOutline
              style={{
                fontSize: '20px',
                marginTop: '8px',
                marginRight: '10px',
              }}
            />
            <div>
              1658 Roseway Lane <br />
              New York city, NY
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <IoCallOutline
              style={{
                fontSize: '20px',
                marginRight: '10px',
              }}
            />
            <div style={{ marginTop: '0' }} className="txt-brand">
              212 929 9953
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <BiEnvelope
              style={{
                fontSize: '20px',
                marginRight: '10px',
              }}
            />
            <div style={{ marginTop: '0px' }} className="txt-brand">
              admin@ftribe.com
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginTop: '0px' }}>
            Operation Regulation of Ec-Exchange
          </div>
          <div style={{ marginTop: '20px' }}>Return Policy</div>
          <div style={{ marginTop: '20px' }}>privacy Policy</div>
          <div style={{ marginTop: '20px' }}>Selling With ftribe</div>
        </div>
        <div>
          <div>
            <div style={{ marginTop: '0px' }}>
              Hotline CUstomer Service
              <br /> <span className="txt-brand">212 929 9953</span>
            </div>
            <div style={{ marginTop: '20px' }}>Frequently asked qustions</div>
            <div style={{ marginTop: '20px' }}>Submit Support REquest</div>
            <div style={{ marginTop: '20px' }}>Ordering Guide</div>
            <div style={{ marginTop: '20px' }}>Shipping Methods</div>
          </div>
        </div>
        <div>
          <div style={{ marginTop: '0px' }}>Installment Purchase Guide</div>
          <div style={{ marginTop: '20px' }}>Import Policy</div>
          <div style={{ marginTop: '20px' }}>
            Customer Support:
            <br /> <span className="txt-brand">customer@ftribe.com</span>
          </div>
          <div style={{ marginTop: '20px' }}>
            Security Error Report:
            <br /> <span className="txt-brand">admin@ftribe.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
