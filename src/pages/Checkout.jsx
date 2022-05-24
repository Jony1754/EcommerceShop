import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import Loading from '../components/Loading';
const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const [disabled, setDisabled] = useState(true);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className='Checkout'>
      <div className='Checkout-container'>
        <h1 className='title'>My order</h1>
        <div className='Checkout-content'>
          <div className='order'>
            <p>
              <span>{day + '.' + month + '.' + year}</span>
              <span>{cart.length} articles</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        </div>
        {cart.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
        {/* <OrderItem /> */}

        <button className='primary-button' disabled={disabled}>
          GO TO PAY
        </button>
      </div>
    </div>
    // <Loading />
  );
};

export default Checkout;
