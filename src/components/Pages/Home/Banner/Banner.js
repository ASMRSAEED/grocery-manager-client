import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block" style={{ width: '100vw', height: '100vh' }}
            src="https://i.ibb.co/Smp21T0/banner-1.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ width: '100vw', height: '100vh' }}
            src="https://i.ibb.co/m0DjckM/banner-2.jpg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" style={{ width: '100vw', height: '100vh' }}
            src="https://i.ibb.co/FKmKpYB/banner-3.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;