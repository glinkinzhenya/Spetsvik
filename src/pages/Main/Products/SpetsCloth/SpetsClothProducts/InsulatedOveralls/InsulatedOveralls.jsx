import React from 'react';
// import './InsulatedOveralls.css';
import ProductsMap from '../../../../../../components/ProductsMap';
import FilterProducts from '../../../FilterProducts/FilterProducts';

export default function InsulatedOveralls() {

  return (
    <div className='workRobes'>
      <div className='boxPath'>
        <div className='boxPath-container container'>
          <a className='boxPath-container__text' href="/">Головна</a>
          <div className='boxPath-container__arrow'>
            <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
          </div>
          <a className='boxPath-container__text' href="/products">Товари</a>
          <div className='boxPath-container__arrow'>
            <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
          </div>
          <a className='boxPath-container__text' href="/spets-cloth">Спецодяг</a>
          <div className='boxPath-container__arrow'>
            <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
          </div>
          <a className='boxPath-container__text' href="/insulated-overalls">Утеплений спецодяг</a>
        </div>
      </div>

      <div className='workRobes-container container'>
        <h3 className='workRobes-secondaryTitle'>Утеплений спецодяг</h3>

        <div className='workRobes-box'>

          <FilterProducts />

          <ProductsMap category='утеплений спецодяг' popular={true} />

        </div>
      </div>
    </div>
  );
}
