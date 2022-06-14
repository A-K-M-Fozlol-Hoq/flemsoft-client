import React, { useState } from 'react';
import brick from './../../asstes/brick.jpg';
import blank from './../../asstes/blank.jpg';
import cross from './../../asstes/cross.jpg';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
const BottomFooter = () => {
  const [showNoti, setShowNoti] = useState(true);
  const handleClick = () => {
    setShowNoti(!showNoti);
  };
  return (
    <div
      style={{
        color: '#000',
        padding: '8px 0 15px',
        width: '80%',
        marginLeft: '10%',
      }}
      className="bottom-footer-wrapper"
    >
      {showNoti && (
        <div
          style={{
            marginTop: '-90px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            width: '300px',
            marginLeft: '-7%',
            height: '100px',
            display: 'flex',
            padding: '5px',
            boxShadow: '0px 15px 10px -15px #111',
          }}
        >
          <img src={blank} style={{ borderRadius: '5px' }} alt="" />
          <div style={{ padding: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '12px' }}>A customer has just bought</div>
              <img
                onClick={handleClick}
                src={cross}
                style={{
                  height: '15px',
                  width: '15px',
                  marginLeft: '15px',
                  cursor: 'pointer',
                }}
                alt=""
              />
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>
              UV Resistant Glasses - <br /> Imported
            </div>
            <div style={{ display: 'flex', fontSize: '12px' }}>
              <div>
                <AiFillStar style={{ color: 'goldenrod' }} />
                <AiFillStar style={{ color: 'goldenrod' }} />
                <AiFillStar style={{ color: 'goldenrod' }} />
                <AiFillStar style={{ color: 'goldenrod' }} />
                <FaStarHalfAlt style={{ color: 'goldenrod' }} /> (13)
              </div>
              <div className="txt-brand" style={{ marginLeft: '68px' }}>
                $250
              </div>
            </div>
            <div style={{ display: 'flex', fontSize: '10px' }}>
              <div>15 mins ago: </div>
              <div style={{ marginLeft: '50px' }}>From New York</div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>Copyright 2022 &copy; ftribe</div>
        <div className="top-menu">
          <span style={{ padding: '5px' }}>
            <span>Introduce</span> . <span>Partner Incentives</span> .{' '}
            <span>Promotion</span> . <span>Contact</span> .{' '}
            <span>Frequently asked question</span>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <img
            src={brick}
            style={{ width: '40px', height: '20px', marginLeft: '8px' }}
            alt=""
          />
          <img
            src={brick}
            style={{ width: '40px', height: '20px', marginLeft: '8px' }}
            alt=""
          />
          <img
            src={brick}
            style={{ width: '40px', height: '20px', marginLeft: '8px' }}
            alt=""
          />
          <img
            src={brick}
            style={{ width: '40px', height: '20px', marginLeft: '8px' }}
            alt=""
          />
          <img
            src={brick}
            style={{ width: '40px', height: '20px', marginLeft: '8px' }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
