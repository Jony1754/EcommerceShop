import React, { useState, useContext, useEffect } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/LOGO.svg';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { initialState } = useContext(AppContext);
  const { logstate, loggedUser } = initialState;
  const {
    initialState: { state },
  } = useContext(AppContext);

  const handleToggle = () => {
    if (logstate) {
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    console.log('log state changed ', logstate, loggedUser);
  }, [logstate]);

  return (
    <nav>
      <img src={menu} alt='menu' className='menu' />
      <div className='navbar-left'>
        <img src={logo} alt='logo' className='nav-logo' />
        <ul>
          <li>
            <Link to='/'>ALL</Link>
          </li>
          <li>
            <Link to='/clothes'>Jewelery</Link>
            {/* <a href='/'>Clothes</a> */}
          </li>

          <li>
            <Link to='/woman'>Woman's clothing</Link>
            <Link to='/man'>Man's clothing</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            {!logstate && (
              <Link to='/login' className='primary-button blue'>
                Sign in
              </Link>
            )}
            {logstate && loggedUser.email}
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={() => {
              setToggleOrders(!toggleOrders);
            }}
          >
            <img src={shoppingCart} alt='shopping cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
