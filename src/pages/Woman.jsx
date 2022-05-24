import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from '../containers/ProductList';
import Loading from '../components/Loading';

const Woman = () => {
  const API2 = 'https://fakestoreapi.com/products/';
  const products = useGetProducts(API2);
  console.table({ ...products[10] }.category);
  const womanclothes = products.filter((item) => {
    return item.category === "women's clothing";
  });
  if (products) {
    return (
      <>
        <ProductList api={API2} store={womanclothes} />
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Woman;
