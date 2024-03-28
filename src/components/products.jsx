import React, { useState } from "react";
import { Pagination } from 'antd';
import Product from "./Product";
import { popularProducts } from "../data";
import "../css/products.css"

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(popularProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = popularProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const renderProducts = () => {
    return (
      <div className="p-5 flex flex-wrap justify-between pagination-center">
        {currentProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderProducts()}
      <Pagination
        className="pagination"
        current={currentPage}
        pageSize={productsPerPage}
        total={popularProducts.length}
        onChange={handlePageChange}
        style={{ position: "absolute", right: 0}}
      />
    </div>
  );
};

export default Products;
