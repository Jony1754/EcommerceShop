import React, { useRef, useState, useContext } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
const Login = () => {
  const form = useRef(null);
  const [show, setShow] = useState(false);
  const { initialState } = useContext(AppContext);
  const { login } = initialState;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    setShow(true);
    setTimeout(() => {
      login(data);
      setShow(false);
    }, 2000);
    // console.log(data);
  };

  return (
    <div className='Login'>
      <div className='Login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form action='/' className='form' ref={form}>
          <label htmlFor='email' className='label'>
            Email address
          </label>
          <input
            type='text'
            name='email'
            placeholder='ariasej@example.cm'
            className='input input-email'
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='*********'
            className='input input-password'
          />
          <button
            onClick={handleSubmit}
            className='primary-button login-button'
          >
            Log in
          </button>
          <a href='/'>Forgot my password</a>
        </form>
        <button className='secondary-button signup-button'>Sign up</button>
      </div>
      <Modal
        title={'LOG IN'}
        show={show}
        onClose={() => {
          setShow(!show);
        }}
      >
        <Spinner />
      </Modal>
    </div>
  );
};

export default Login;
