import { useState } from 'react';

const initialState = {
  cart: [],
  users: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    if (state.cart.find((item) => item.id === payload.id)) {
      const item = { ...payload, quantity: payload.quantity + 1 };
      const cartaux = state.cart.filter((item) => item.id !== payload.id);
      setState({ ...state, cart: [...cartaux, item] });
    } else {
      const item = { ...payload, quantity: 1 };
      setState({
        ...state,
        cart: [...state.cart, item],
      });
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
