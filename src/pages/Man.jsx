import React from 'react';
import ProductList from '../containers/ProductList';
import useGetProducts from '../hooks/useGetProducts';
const Man = () => {
  const API2 = 'https://fakestoreapi.com/products/';
  const products = useGetProducts(API2);
  console.table({ ...products[10] }.category);
  const mansclothes = products.filter((item) => {
    return item.category === "men's clothing";
  });

  return (
    <>
      <ProductList api={API2} store={mansclothes} />
    </>
  );
};

export default Man;
