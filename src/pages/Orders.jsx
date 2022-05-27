import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';
import AppContext from '../context/AppContext';
const Orders = () => {
  const { initialState } = useContext(AppContext);
  const { state, logstate, loggedUser } = initialState;
  const { orders } = loggedUser;
  const { products } = useContext(AppContext);
  let prodstemp = [];
  if (products) {
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (orders[i].id === products[j].id) {
          prodstemp.push(products[j]);
        }
      }
    }
  }

  console.log('ORDERS AND LOG USER ', loggedUser);
  return (
    <div className='Orders'>
      <div className='Orders-container'>
        <h1 className='title'>My orders</h1>
        <div className='Orders-content'>
          {prodstemp.map((product) => {
            return <OrderItem key={product.id} product={product} />;
          })}
          {/* <OrderItem /> */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
