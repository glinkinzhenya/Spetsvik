import React from 'react';
import './WorkRobes2.css';
import ProductsMap from '../../../../../components/ProductsMap';
import FilterProducts from '../../FilterProducts/FilterProducts';
// import FilterProducts from '../../FilterProducts/FilterProducts';

export default function WorkRobes2() {

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
          <a className='boxPath-container__text' href="/work-robes">Халати робочі</a>
        </div>
      </div>

      <div className='workRobes-container container'>
        <h3 className='workRobes-secondaryTitle'>Халати робочі</h3>

        <div className='workRobes-box'>

          <FilterProducts />

          <ProductsMap category='халати робочі' popular={true} />

        </div>
      </div>
    </div>
  );
}