import React from 'react';
import Menu from './Menu';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import './Header.css';
const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#000' }}>
        <TopHeader></TopHeader>
        <MiddleHeader></MiddleHeader>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Header;
