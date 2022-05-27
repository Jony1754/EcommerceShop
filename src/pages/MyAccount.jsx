import React, { useContext } from 'react';
import '@styles/MyAccount.scss';
import AppContext from '../context/AppContext';
const MyAccount = () => {
  const { initialState } = useContext(AppContext);
  const { loggedUser } = initialState;
  return (
    <div className='MyAccount'>
      <div className='MyAccount-container'>
        <h1 className='title'>My account</h1>
        <form action='/' className='form'>
          <div>
            <label for='name' className='label'>
              Name
            </label>
            <p className='value'>{loggedUser.name}</p>
            <label for='email' className='label'>
              Email
            </label>
            <p className='value'>{loggedUser.email}</p>
            <label for='password' className='label'>
              Password
            </label>
            <p className='value'>*********</p>
          </div>
          <input
            type='submit'
            value='Edit'
            className='secondary-button login-button'
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
