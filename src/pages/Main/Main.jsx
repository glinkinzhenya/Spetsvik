import React from 'react';
import './Main.css';
import News from './News/News';
import CategoriesServises from './CategoriesServises/CategoriesServises';
import Partners from './Partners/Partners';
import ImageCarouselCopy from './ImageCarousel copy/ImageCarouselCopy';

export default function Main() {

  return (
    <main>
      <ImageCarouselCopy />
      <CategoriesServises />
      <News />
      <Partners />
    </main>
  );
}
