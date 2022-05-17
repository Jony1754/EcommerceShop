import React from 'react';
import ProductList from '../containers/ProductList';
const Clothes = () => {
  const API2 = 'https://fakestoreapi.com/products/category/jewelery';

  return (
    <>
      <ProductList api={API2} />
    </>
  );
};

export default Clothes;
