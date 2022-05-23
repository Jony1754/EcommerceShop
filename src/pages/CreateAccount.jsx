import React, { useRef } from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      username: formData.get('username'),
      name: formData.get('name'),
      password: formData.get('password'),
    };
    console.log(data);
  };
  return (
    <div className='CreateAccount'>
      <div className='CreateAccount-container'>
        <h1 className='title'>Create account</h1>
        <form action='/' className='form' onSubmit={handleSubmit} ref={form}>
          <div>
            <label for='name' className='label'>
              Full name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Jonathan'
              className='input input-name'
            />
            <label for='username' className='label'>
              username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='ariasj'
              className='input input-name'
            />
            <label for='email' className='label'>
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='ariasej@example.com'
              className='input input-email'
            />
            <label for='password' className='label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='*********'
              className='input input-password'
            />
          </div>
          {/* <input
            type='submit'
            value='Create'
            className='primary-button login-button'
          /> */}
          <button
            className='primary-button login-button'
            onClick={handleSubmit}
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
