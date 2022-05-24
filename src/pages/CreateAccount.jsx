import React, { useRef } from 'react';
import '@styles/CreateAccount.scss';
import { Button, Modal } from 'semantic-ui-react';

const CreateAccount = () => {
  const form = useRef(null);
  const [open, setOpen] = React.useState(false);

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
    setOpen(true);
  };
  return (
    <div className='CreateAccount'>
      <div className='CreateAccount-container'>
        <h1 className='title'>Create account</h1>
        <form action='/' className='form' onSubmit={handleSubmit} ref={form}>
          <div>
            <label htmlFor='name' className='label'>
              Full name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Jonathan'
              className='input input-name'
            />
            <label htmlFor='username' className='label'>
              username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='ariasj'
              className='input input-name'
            />
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='ariasej@example.com'
              className='input input-email'
            />
            <label htmlFor='password' className='label'>
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

          <button
            className='primary-button login-button'
            onClick={handleSubmit}
          >
            CREATE
          </button>
        </form>
      </div>
      <div className='mymodal'>
        <Modal
          className='mymodal'
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {
            setOpen(true);
            console.log('open onOpen');
          }}
        >
          <Modal.Header>Thank you!</Modal.Header>
          <Modal.Content>
            <Modal.Description>Your account has been created</Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default CreateAccount;
