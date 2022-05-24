import React from 'react';
import Loading from '../components/Loading';
import ProductList from '../containers/ProductList';
import useGetProducts from '../hooks/useGetProducts';
const Man = () => {
  const API2 = 'https://fakestoreapi.com/products/';
  const products = useGetProducts(API2);
  console.table({ ...products[10] }.category);
  const mansclothes = products.filter((item) => {
    return item.category === "men's clothing";
  });

  if (products) {
    return (
      <>
        <ProductList api={API2} store={mansclothes} />
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Man;
