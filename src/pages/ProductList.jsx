import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations"; // Corrected import

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const ProductList = () => {
  return (
    <FadeInDiv>
      <Announcement />
      <Navbar />
      <div className="mx-10 my-10">
        <h1 className="text-3xl font-semibold">Dresses</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center my-5">
          <div className="mb-5 lg:mb-0">
            <span className="text-lg font-semibold mr-3">Filter Products:</span>
            <select className="px-3 py-2 border border-gray-300 rounded-md mr-3">
              <option disabled defaultValue>Color</option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option disabled defaultValue>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div>
            <span className="text-lg font-semibold mr-3">Sort Products:</span>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option defaultValue>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
        <Products />
      </div>
      <Newsletter />
      <Footer />
    </FadeInDiv>
  );
};

export default ProductList;
