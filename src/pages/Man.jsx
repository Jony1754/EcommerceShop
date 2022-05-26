import React, { useContext } from 'react';
import Loading from '../components/Loading';
import ProductList from '../containers/ProductList';
import useGetProducts from '../hooks/useGetProducts';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';
const Man = () => {
  const { products } = useContext(AppContext);
  const mansclothes = products.filter((item) => {
    return item.category === "men's clothing";
  });

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
