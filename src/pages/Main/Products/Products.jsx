import React from 'react';
import './Products.css';
import CategoriesServises from '../CategoriesServises/CategoriesServises';

export default function Products() {

  return (
    <div className='products'>
      <div className='services-container container'>
        <h2 className='services-title'>ТОВАРИ</h2>

        <CategoriesServises />
        
      </div>
    </div>
  );
}
