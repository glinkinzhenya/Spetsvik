import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap';
import PopularMain from '../../../PopularMain/PopularMain';
import News from '../../../../News/News';

export default function Shorts() {

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
            <a className='boxPath-container__text' href="/military-equipment">Військова екіпіровка</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/shorts">Шорти</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Шорти</h3>

              <ProductsMap category='шорти' />
              
        </div>
      </div>

      <PopularMain category='шорти' popular={true} />

      <News />
    </>
  );
}
