import React from 'react';
import ProductsMap from '../../../../../components/ProductsMap';

export default function PopularMain() {

  return (
    <>
      <div className='popularMain'>
        <div className='popularMain-container container'>
          <h3 className='popularMain-secondaryTitle'>Популярні товари</h3>
        </div>

        <div className='productsMap container'>
          <div className='popularMain-box'>

          <ProductsMap category='халати робочі' popular={true} />

          </div>
        </div>
      </div>
    </>
  );
}
