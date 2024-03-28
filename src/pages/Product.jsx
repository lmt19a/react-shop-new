import React, { useState } from "react"; // Thêm import useState
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined, HeartOutlined } from '@ant-design/icons';

const Product = () => {
  const [quantity, setQuantity] = useState(1); 

  const decreaseQuantity = () => {
    if (quantity > 1) { 
      setQuantity(quantity - 1); 
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1); 
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Announcement />
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center px-6 sm:px-12 py-10">
        <div className="w-full sm:w-1/2">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" className="w-full h-auto sm:h-90vh object-cover" alt="Denim Jumpsuit" />
        </div>
        <div className="w-full sm:w-1/2 px-6 sm:px-10 mt-6 sm:mt-0">
          <h1 className="font-light text-3xl sm:text-4xl mb-4">Denim Jumpsuit</h1>
          <p className="mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.</p>
          <div className="flex items-center mb-6">
            <span className="text-gray-500 text-lg font-light mr-4">Color:</span>
            <div className="w-6 h-6 rounded-full bg-black mr-2"></div>
            <div className="w-6 h-6 rounded-full bg-blue-800 mr-2"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 mr-2"></div>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-gray-500 text-lg font-light mr-2">Size:</span>
            <select className="p-2 border border-gray-300 rounded">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-gray-500 text-lg font-light mr-2">Quantity:</span>
            <button className="border border-gray-300 rounded-md px-3 py-1 mr-3" onClick={decreaseQuantity}><MinusOutlined /></button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button className="border border-gray-300 rounded-md px-3 py-1 ml-3" onClick={increaseQuantity}><PlusOutlined /></button>
          </div>
          <div className="flex flex-row gap-6">
            <button className="w-2/3 py-4 border border-teal-500 rounded font-semibold cursor-pointer hover:bg-teal-500 hover:text-white transition duration-300">ADD TO CART</button>
            <button className="w-1/3 py-4 border border-teal-500 rounded font-semibold cursor-pointer hover:bg-teal-500 hover:text-white transition duration-300">BUY NOW</button>
            <button className="w-16 rounded-full py-4 border border-teal-500 font-semibold cursor-pointer hover:bg-teal-500 hover:text-white transition duration-300">
              <HeartOutlined /> 
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
