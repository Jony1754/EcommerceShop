import React from 'react';
import Loading from '../components/Loading';
import ProductList from '../containers/ProductList';
import useGetProducts from '../hooks/useGetProducts';
import Modal from '../components/Modal';
const Man = () => {
  const API2 = 'https://fakestoreapi.com/products/';
  const products = useGetProducts(API2);
  console.table({ ...products[10] }.category);
  const mansclothes = products.filter((item) => {
    return item.category === "men's clothing";
  });

  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(products);
  data.length === 0 && setLoading(true);
  data.length !== 0 && setLoading(false);

  if (!loading) {
    return (
      <>
        <ProductList api={API2} store={mansclothes} />
      </>
    );
  } else {
    return (
      <Modal
        show={loading}
        title='NOTIFICACION'
        onClose={() => {
          setShow(false);
        }}
      >
        <Loading />
      </Modal>
    );
  }
};

export default Man;
