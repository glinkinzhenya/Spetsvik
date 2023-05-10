import React from 'react';
import './Main.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Categories from '../Categories/Categories';
import News from '../News/News';

export default function Main() {

  return (
    <>
      <ImageCarousel />
      <Categories />
      <News/>
    </>
  );
}
