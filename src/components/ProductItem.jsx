import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const {
    initialState: { addToCart, state },
  } = useContext(AppContext);

  const handleClick = (item) => {
    if (state.cart.find((product) => product.id === item.id)) {
    } else {
      addToCart({ ...item, quantity: 1 });
    }
  };
  console.log('product item', product);
  return (
    <div className='ProductItem'>
      <img src={product.image} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt='' />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
