import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';
import Loading from '../components/Loading';

const ProductList = ({ api, store }) => {
  console.log('API EN PRODUCT LIST' + api);
  let products;
  if (store) {
    products = store;
  } else {
    products = useGetProducts(api);
  }

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
