import React from 'react';
import ProductSlideE from '../ProductٍSlideE';
import Priduction from '../Priduction';
import Slide2 from '../Slide2';
import Momyz from '../Momyz';
import OnePic from '../OnePic';
import Product2 from '../Product2';
import TwoPic from '../TwoPic';

function HomePage() {
  return (
    <React.Fragment>
      <section id="hero">
        <ProductSlideE />
      </section>

      <section id="production" className="section-padding">
        <Priduction />
      </section>

      <section id="slideshow" className="section-padding">
        <Slide2 />
      </section>

      <section id="special-offers" className="section-padding">
        <Momyz />
      </section>

      <section id="featured-image" className="section-padding">
        <OnePic />
      </section>

      <section id="additional-products" className="section-padding">
        <Product2 />
      </section>

      <section id="gallery" className="section-padding">
        <TwoPic />
      </section>
    </React.Fragment>
  );
}

export default HomePage;