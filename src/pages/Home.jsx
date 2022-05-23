import React from 'react';
import catalogue from '@images/catalogue.svg';
import delivery from '@images/delivery.svg';
import payments from '@images/payments.svg';
import shop from '@images/shop.svg';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '@containers/ProductList';
import '@styles/Home.scss';
const Home = () => {
  const API = 'https://fakestoreapi.com/products';
  return (
    <>
      <div className='hero'>
        <div className='hero-img'>
          <Carousel>
            <Carousel.Item>
              <img className='d-block w-100' src={shop} alt='First slide' />
              <Carousel.Caption>
                <h3>The best catalogue</h3>
                <p>
                  Find anything you want in our store. We have a wide range of
                  products
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={delivery}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Fast delivery</h3>
                <p>Get your products instantly</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={catalogue}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>All in one place</h3>
                <p>The best brands are with US</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='hero-text'>
          <div className='hero-text-container'>
            <p>
              The <em>all</em> in one place with <em>no ADS</em> and the fastest
              delivery time in the <em>world</em>
            </p>
            <button className='primary-button'>
              <Link to='/login'>SIGN IN</Link>
            </button>
            <button className='secondary-button'>
              <Link to='/signup'>REGISTER</Link>
            </button>
          </div>
        </div>
      </div>
      <ProductList api={API} />
    </>
  );
};

export default Home;
