import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap';
import FilterProducts from '../../../FilterProducts/FilterProducts';
import PopularMain from '../../PopularMain/PopularMain';
import News from '../../../../News/News';

export default function InsulatedOveralls() {

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
            <a className='boxPath-container__text' href="/insulated-overalls">Утеплений спецодяг</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Утеплений спецодяг</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='утеплений спецодяг' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='утеплений спецодяг' popular={true} />

      <News />
    </>
  );
}
