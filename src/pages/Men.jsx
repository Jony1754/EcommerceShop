import React from 'react';
import ProductList from '../containers/ProductList';
import Loading from '../components/Loading';

const Men = () => {
  const API2 = 'https://fakestoreapi.com/products/category/electronics';

  return (
    <>
      <ProductList api={API2} />
    </>
  );
};

export default Men;
