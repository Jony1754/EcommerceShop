import React from 'react';
import '@styles/Modal.scss';
const Modal = ({ onClose, title, show, children }) => {
  if (!show) return null;

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>{title}</h4>
        </div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <button onClick={onClose} className='primary-button'>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
