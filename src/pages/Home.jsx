import React from 'react';
import ProductList from '@containers/ProductList';

const Home = () => {
  const API = 'https://fakestoreapi.com/products';
  return (
    <>
      <ProductList api={API} />
    </>
  );
};

export default Home;
