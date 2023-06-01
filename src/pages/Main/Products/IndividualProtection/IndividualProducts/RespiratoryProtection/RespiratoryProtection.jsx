import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap';
import FilterProducts from '../../../FilterProducts/FilterProducts';
import PopularMain from '../../../PopularMain/PopularMain';
import News from '../../../../News/News';

export default function RespiratoryProtection() {

  return (
    <>
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

            <a className='boxPath-container__text' href="/individual-protection">Засоби індивідуального захисту</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/respiratory-protection">Засоби захисту органів дихання</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Засоби захисту органів дихання</h3>

          <div className='workRobes-box'>

            <FilterProducts />


            <div className='workRobes-box__productsMap'>
              <ProductsMap category='засоби захисту органів дихання' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='засоби захисту органів дихання' popular={true} />

      <News />
    </>
  );
}
