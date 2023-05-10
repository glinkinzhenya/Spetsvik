import React from 'react';
import './CategoriesServises.css';
import Categories from './Categories/Categories';
import Servises from './Servises/Servises';

export default function CategoriesServises() {

  return (
    <div className='categoriesServises'>
      <Categories />
      <Servises />
    </div>
  );
}
