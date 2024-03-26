import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Product = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Announcement />
      <div className="flex flex-col sm:flex-row px-6 sm:px-12 py-10">
        <div className="w-full sm:w-1/2">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" className="w-full h-90vh object-cover" alt="Denim Jumpsuit" />
        </div>
        <div className="w-full sm:w-1/2 px-6 sm:px-10 mt-6 sm:mt-0">
          <h1 className="font-light text-2xl mb-4">Denim Jumpsuit</h1>
          <p className="mb-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.</p>
          <span className="text-gray-500 text-4xl font-light">$ 20</span>
          <div className="flex justify-between mt-6">
            <div className="flex items-center">
              <span className="text-gray-500 text-lg font-light mr-4">Color:</span>
              <div className="w-6 h-6 rounded-full bg-black mr-2"></div>
              <div className="w-6 h-6 rounded-full bg-blue-800 mr-2"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 mr-2"></div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 text-lg font-light mr-2">Size:</span>
              <select className="p-2 border border-gray-300 rounded">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex items-center mr-12">
              <MinusOutlined />
              <span className="w-8 h-8 border border-teal-500 flex items-center justify-center rounded-full mx-4">1</span>
              <PlusOutlined />
            </div>
            <button className="px-8 py-4 border border-teal-500 rounded font-semibold cursor-pointer hover:bg-gray-100">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
