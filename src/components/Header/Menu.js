import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlinePersonOutline } from 'react-icons/md';

const Menu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        marginLeft: '10%',
        color: 'black',
      }}
    >
      <div style={{ marginLeft: '-20px' }}>
        <ul className="nav nav-pills">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              style={{ color: '#000' }}
            >
              <AiOutlineUnorderedList style={{ margin: '-3px 8px 0 0' }} />
              Category{' '}
              <RiArrowDropDownLine
                style={{ marginLeft: '20px', fontSize: '25px' }}
              />
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
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="#"
              style={{ color: '#000' }}
            >
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              style={{ color: '#000' }}
            >
              New Product{' '}
              <RiArrowDropDownLine
                style={{ marginLeft: '10px', fontSize: '25px' }}
              />
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              style={{ color: '#000', display: 'flex' }}
            >
              Promotion
              <div
                style={{
                  backgroundColor: '#FF8154',
                  color: '#fff',
                  borderRight: '50%',
                  fontSize: '12px',
                  padding: '0 3px',
                  width: '35px',
                  height: '18px',
                  borderRadius: '10px',
                  marginTop: '5px',
                  marginLeft: '5px',
                  textAlign: 'center',
                }}
              >
                HOT
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
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link "
              aria-current="page"
              href="#"
              style={{ color: '#000' }}
            >
              <TbTruckDelivery
                style={{ fontSize: '20px', marginRight: '5px' }}
              />
              Track Your Order
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              aria-current="page"
              href="#"
              style={{ color: '#000' }}
            >
              <MdOutlinePersonOutline
                style={{ fontSize: '20px', marginRight: '5px' }}
              />
              Sign In/Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
