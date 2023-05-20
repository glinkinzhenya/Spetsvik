import React from 'react';
import './Main.css';
import News from './News/News';
import CategoriesServises from './CategoriesServises/CategoriesServises';
import Partners from './Partners/Partners';
import ImageCarousel from './ImageCarousel/ImageCarousel';

export default function Main() {

  return (
    <main>
      <ImageCarousel />
      {/* <CategoriesServises />
      <News />
      <Partners /> */}
    </main>
  );
}
