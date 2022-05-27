import React, { useContext, useState } from 'react';
import '@styles/Menu.scss';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Modal from './Modal';
const Menu = () => {
  const { initialState } = useContext(AppContext);
  const { setLoggedUser, logstate, setLogstate } = initialState;
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    setLoggedUser({});
    setShow(true);
    setLogstate(false);
  };
  return (
    <div className='Menu'>
      <ul>
        {/* <li>
					<a href="/" className="title">My orders</a>
				</li> */}
        <li>
          <Link to='/account'>My account</Link>
        </li>
        <li>
          <a onClick={handleLogout}>Sign out</a>
        </li>
      </ul>
      <Modal
        title={'LOG OUT'}
        show={show}
        onClose={() => {
          setShow(!show);
        }}
      >
        <p>Thanks for buying</p>
      </Modal>
    </div>
  );
};

export default Menu;
