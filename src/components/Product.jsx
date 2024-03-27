import React from "react";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons';
import "../css/ListProduct.css"; 

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <img src={item.img} className="product-image" alt="Product" />
      <div className="info">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <SearchOutlined />
        </div>
        <div className="icon">
          <HeartOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
