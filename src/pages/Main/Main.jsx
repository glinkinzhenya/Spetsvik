import React from 'react';
import './Main.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import News from './News/News';
import CategoriesServises from './CategoriesServises/CategoriesServises';
import Partners from './Partners/Partners';

export default function Main() {

  return (
    <main>
      <ImageCarousel />
      <CategoriesServises />
      <News />
      <Partners />
    </main>
  );
}
