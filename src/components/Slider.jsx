import React, { useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { sliderItems } from '../data'; 
import '../css/Slider.css';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  
    return (
      <div className='container1'>
        <div className='arrow left' onClick={() => handleClick("left")}>
          <CaretLeftOutlined />
        </div>
        <div className='wrapper' style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
          {sliderItems.map((item) => (
            <div className='slide' style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
              <div className='img-container'>
                <img src={item.img} alt="Slide" className='image' />
              </div>
              <div className='info-container'>
                <h1 className='title'>{item.title}</h1>
                <p className='desc'>{item.desc}</p>
                <button className='button'>SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>
        <div className='arrow right' onClick={() => handleClick("right")}>
          <CaretRightOutlined />
        </div>
      </div>
    );
  };
  
  export default Slider;