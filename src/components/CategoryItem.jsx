import React from 'react';
import '../css/categories.css'
import '../css/CategoryItem.css'


const CategoryItem = ({ item }) => {
  return (
    <div className='flex-1 m-1 relative' style={{ height: '70vh' }}>
      <img className='Image' src={item.img} alt={item.title} />
      <div className='Info absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <h2 className='Title'>{item.title}</h2> 
        <button className='Button border-none p-3 bg-white cursor-pointer text-gray-950'>SHOW NOW</button>
      </div>
    </div>
  );
};


export default CategoryItem;
