import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/products';

const home = () => {
  return (
    <div>
      <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}

export default home