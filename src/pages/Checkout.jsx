import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className='Checkout'>
      <div className='Checkout-container'>
        <h1 className='title'>My order</h1>
        <div className='Checkout-content'>
          <div className='order'>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        {cart.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
        {/* <OrderItem /> */}
      </div>
    </div>
  );
};

export default Checkout;
