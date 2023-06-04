import React from 'react';
import './Products.css';
import CategoriesServises from '../CategoriesServises/CategoriesServises';

export default function Products() {

  return (
    <div className='products'>
      <div className='products-container container'>
        <h2 className='products-title'>ТОВАРИ</h2>

        <CategoriesServises />
        
      </div>
    </div>
  );
}
