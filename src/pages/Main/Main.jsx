import React from 'react';
import './Main.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import News from './News/News';
import CategoriesServises from './CategoriesServises/CategoriesServises';

export default function Main() {

  return (
    <main>
      <ImageCarousel />
      <CategoriesServises />
      <News />
    </main>
  );
}
