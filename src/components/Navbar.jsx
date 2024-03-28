// Navbar.js
import React from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='py-2.5 px-5 flex justify-between items-center'>
        <div className='flex items-center md:flex-1'>
          <span className='language'>EN</span>
          <div className='search-container'>
            <input className='search-input' />
            <SearchOutlined style={{ color: "gray", fontSize: 16, marginLeft: 8 }} />
          </div>
        </div>
        <div className='md:flex-1 text-center'>
          <h1 className='logo'>LAMA.</h1>
        </div>
        <div className='flex items-center md:flex-1 justify-end'>
          <div className="menu-items">REGISTER</div>
          <div className="menu-items">SIGN IN</div>
          <div className="menu-items">
            <Badge count={5}>
              <ShoppingCartOutlined className='shopping-cart-icon' />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
