import React from 'react';
import Menu from './Menu';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import './Header.css';
const Header = () => {
  return (
    <div style={{ boxShadow: '0px 15px 10px -15px #111' }}>
      <div style={{ backgroundColor: '#000' }}>
        <TopHeader></TopHeader>
        <MiddleHeader></MiddleHeader>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Header;
