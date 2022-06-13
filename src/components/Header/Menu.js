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
            <a className="nav-link" aria-current="page" href="#">
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
            >
              Promotion
              <span>hot</span>
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
            <a className="nav-link " aria-current="page" href="#">
              <TbTruckDelivery />
              Track Your Order
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              <MdOutlinePersonOutline />
              Sign In/Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
