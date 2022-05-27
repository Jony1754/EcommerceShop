import { useState } from 'react';

const initialState = {
  cart: [],
  users: [{ email: 'test@', password: '123', name: 'test' }],
  loggedUser: {},
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [logstate, setLogstate] = useState(false);
  const login = (payload) => {
    console.log('called login with: ', payload, 'and users: ', state.users);
    const { email, password } = payload;
    state.users.forEach((user) => {
      if (user.email == email && user.password == password) {
        setState({ ...state, loggedUser: user });
        setLogstate(true);
        console.log('SUCCESFUL LOG ', user);
        console.log('logged user: ', state.loggedUser);
      }
    });
  };
  const addUser = (payload) => {
    //Actualizar tambien los pedidos o los items del carro de este usuario
    setState({ ...state, users: [state.users, payload] });
    console.log('payload ', payload);
    console.log('users from addUser: ', state.users);
    return true;
  };
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
    addUser,
    login,
    logstate,
  };
};

export default useInitialState;
