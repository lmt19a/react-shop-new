import React, { useState, useEffect } from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import '../css/categories.css'

const Categories = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [displayedCategories, setDisplayedCategories] = useState([]);

  useEffect(() => {
    const updateDisplayedCategories = () => {
      if (window.innerWidth < 640) {
        setDisplayedCategories([categories[currentCategoryIndex]]);
      } else {
        setDisplayedCategories(categories.slice(0, 3));
      }
    };

    updateDisplayedCategories();

    const handleResize = () => {
      updateDisplayedCategories();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentCategoryIndex]);

  const handlePrevCategory = () => {
    setCurrentCategoryIndex(prevIndex =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNextCategory = () => {
    setCurrentCategoryIndex(prevIndex =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative'>
      <div className='flex p-4 justify-between'>
        <button className='arrow1 prev-btn' onClick={handlePrevCategory}>
        <CaretLeftOutlined />
        </button>
        {displayedCategories.map((item, index) => (
          <CategoryItem item={item} key={index} />
        ))}
        <button className='arrow1 next-btn' onClick={handleNextCategory}>
        <CaretRightOutlined />
        </button>
      </div>
    </div>
  );
};

export default Categories;
