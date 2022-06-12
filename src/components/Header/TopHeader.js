import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { BiEnvelope } from 'react-icons/bi';

const TopHeader = () => {
  return (
    <div
      style={{ color: '#fff', padding: '8px 0 15px' }}
      className="top-header-wrapper"
    >
      <div
        style={{
          width: '80%',
          marginLeft: '10%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <AiOutlineFacebook
            style={{ marginRight: '10px', fontSize: '18px' }}
          />
          <AiOutlineLinkedin
            style={{ marginRight: '10px', fontSize: '18px' }}
          />
          <FiTwitter style={{ marginRight: '10px', fontSize: '18px' }} />
          <BiEnvelope style={{ fontSize: '18px' }} />
        </div>
        <div className="top-menu">
          <span style={{ padding: '5px' }}>
            <span>Introduce</span> . <span>Partner Incentives</span> .{' '}
            <span>Promotion</span> . <span>Contact</span> .{' '}
            <span>Frequently asked question</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
