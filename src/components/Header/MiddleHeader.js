import React from 'react';
import logo from '../../asstes/logo.jpg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';

const MiddleHeader = () => {
  return (
    <div
      className="middle-header-wrapper"
      style={{
        color: '#fff',
        padding: '8px 0 15px',
        width: '80%',
        marginLeft: '10%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10px',
        }}
      >
        <img src={logo} style={{ width: '70px' }} alt="" />
        <div style={{ display: 'flex', height: '45px', marginTop: '10px' }}>
          <div style={{ marginRight: '50px', display: 'flex' }}>
            <input
              type="text"
              placeholder="what are you looking for?"
              className="form-control header-search"
            />
            <ul className="nav nav-pills">
              <li
                className="nav-item dropdown search-category-btn"
                style={{ backgroundColor: 'red' }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Category{' '}
                  <RiArrowDropDownLine
                    style={{ marginLeft: '20px', fontSize: '25px' }}
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mx-3" href="#">
                      Smart Watch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mx-3" href="#">
                      Laptop
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item mx-5"
                      style={{ color: '#858585' }}
                      href="#"
                    >
                      Apple
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item mx-5"
                      style={{ color: '#858585' }}
                      href="#"
                    >
                      Dell
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item mx-3" href="#">
                      Desktop
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item mx-5"
                      style={{ color: '#858585' }}
                      href="#"
                    >
                      IMac
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item mx-5"
                      style={{ color: '#858585' }}
                      href="#"
                    >
                      Mac Mini
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-brand mx-2 px-4">Search</button>
          </div>

          <div style={{ marginTop: '8px', display: 'flex' }}>
            <AiOutlineHeart style={{ fontSize: '22px', marginRight: '30px' }} />
            <ul className="nav nav-pills">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  style={{ display: 'flex', marginTop: '-12px', color: '#fff' }}
                >
                  <BiCart style={{ fontSize: '25px' }} />
                  <div
                    style={{
                      backgroundColor: '#FF8154',
                      color: '#fff',
                      borderRight: '50%',
                      fontSize: '12px',
                      padding: '0 3px',
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      marginLeft: '-8px',
                      marginTop: '-5px',
                    }}
                  >
                    3
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
