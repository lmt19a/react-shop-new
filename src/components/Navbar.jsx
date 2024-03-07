import React from 'react';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'; // Thêm dòng này
import { Badge } from 'antd';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <div className='h-14'>
  <div className='py-2.5 px-5 flex justify-between items-center'>
    <div className='flex items-center md:flex-1'>
      <span className='Language text-sm cursor-pointer'>EN</span>
      <div className='SearchContainer border border-solid border-current ml-6 p-1.5'>
        <input className='border-0' /> 
        <SearchOutlined style={{color: "gray", fontSize: 16, marginLeft: 8}}/>
      </div>
    </div>
    <div className='md:flex-1 text-center'>
      <h1 className='logo text-4xl font-semibold'>LAMA.</h1>
    </div>
    <div className='flex items-center md:flex-1 justify-end'>
      <div className="MenuItems ml-6">REGISTER</div>
      <div className="MenuItems ml-6">SIGN IN</div>
      <div className="MenuItems ml-6">
        <Badge count={5}>
          <ShoppingCartOutlined className='text-3xl'/>
        </Badge>
      </div>
    </div>
  </div>
</div>


  );
};

export default Navbar;
