import React from 'react';
import '../styles/Loading.scss';
import loading from '@images/loading.svg';
const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading-container'>
        <h1>Just a sec, we're almost there!</h1>
        <figure>
          <img src={loading} alt='' />
        </figure>
        <div class='lds-spinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
