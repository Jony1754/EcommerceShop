import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from '../containers/ProductList';
const Woman = () => {
  const API2 = 'https://fakestoreapi.com/products/';
  const products = useGetProducts(API2);
  console.table({ ...products[10] }.category);
  const womanclothes = products.filter((item) => {
    return item.category === "women's clothing";
  });

  return (
    <>
      <ProductList api={API2} store={womanclothes} />
    </>
  );
};

export default Woman;
