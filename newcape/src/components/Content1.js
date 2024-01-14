import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Scard1 from './Scard1'

export default function Content1(){
return(
  <>
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 "
         style={{height:"500px"}} src="https://www.annairesorts.com/images/Home/kanyakumari_hotels_with_swimming_pool.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>UNIQUE EXPIRENCE </h3>
          <p>ENJOY & EXPLORE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100 h-40"
          src="https://www.annairesorts.com/images/Home/conference_hall_providers_in_kanyakumari.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>UNIQUE EXPIRENCE </h3>
          <p>ENJOY & EXPLORE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"500px"}}
          className="d-block w-100 h-40"
          src="https://www.annairesorts.com/images/Home/classic_sea_view_restaurant_in_kanyakumari.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>UNIQUE EXPIRENCE </h3>
          <p>ENJOY & EXPLORE</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<Scard1/>


</>
);
}