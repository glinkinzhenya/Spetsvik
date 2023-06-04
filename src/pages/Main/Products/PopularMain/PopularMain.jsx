import React from 'react';
import './PopularMain.css';
import ProductsMap from '../../../../components/ProductsMap';

export default function PopularMain({ category, popular }) {

  return (
    <>
      <div className='popularMain'>
        <div className='popularMain-container container'>
          <h3 className='popularMain-secondaryTitle'>Популярні товари</h3>
        </div>
        <div className='productsMap container'>


<div className='popularMain-box'>

<ProductsMap category={category} popular={popular} />
         

          </div>
        </div>
      </div>
    </>
  );
}
