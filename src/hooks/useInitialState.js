import { useState } from 'react';

const initialState = {
  cart: [],
  users: [
    {
      email: 'jony@gmail.com',
      password: '12345',
      name: 'Jonathan Arias Rua',
      orders: [5, 6, 7],
    },
    {
      email: 'ger@gmail.com',
      password: '12345',
      name: 'German David Vargas',
      orders: [1, 2, 3],
    },
    {
      email: 'enri@gmail.com',
      password: '12345',
      name: 'Enrique Jose Miranda',
      orders: [8, 9, 10],
    },
  ],
  // loggedUser: {},
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [loggedUser, setLoggedUser] = useState({});
  const [logstate, setLogstate] = useState(false);
  const login = (payload) => {
    console.log('called login with: ', payload, 'and users: ', state.users);
    const { email, password } = payload;
    state.users.forEach((user) => {
      if (user.email == email && user.password == password) {
        setLogstate(true);
        console.log(user);
        // setState({ ...state, loggedUser: user });
        setLoggedUser(user);
        console.log('SUCCESFUL LOG ', user);
        console.log('logged user: ', loggedUser);
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
    loggedUser,
    setLoggedUser,
    setLogstate,
  };
};

export default useInitialState;
