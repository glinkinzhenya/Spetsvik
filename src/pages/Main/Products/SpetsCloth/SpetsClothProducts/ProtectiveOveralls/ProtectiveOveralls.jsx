import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap';
import FilterProducts from '../../../FilterProducts/FilterProducts';

export default function ProtectiveOveralls() {

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
          <a className='boxPath-container__text' href="/protective-overalls">Захисний спецодяг</a>
        </div>
      </div>

      <div className='workRobes-container container'>
        <h3 className='workRobes-secondaryTitle'>Захисний спецодяг</h3>

        <div className='workRobes-box'>

          <FilterProducts />

          <ProductsMap category='захисний спецодяг'  popular={true} />

        </div>
      </div>
    </div>
  );
}
