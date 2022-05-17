import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';

const ProductList = ({ api }) => {
  console.log('API EN PRODUCT LIST' + api);
  const products = useGetProducts(api);

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
