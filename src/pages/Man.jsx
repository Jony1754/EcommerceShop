import React, { useContext } from 'react';
import Loading from '../components/Loading';
import ProductList from '../containers/ProductList';
import useGetProducts from '../hooks/useGetProducts';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
const Man = () => {
  const { initialState, products } = useContext(AppContext);

  const mansclothes = products.filter((item) => {
    return item.category === "men's clothing";
  });
  const API2 = 'https://fakestoreapi.com/products/';
  console.log('STATE EN MANS CLOTHES: ', initialState.state);
  if (products.length !== 0) {
    console.log('entro a + ', products);
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
