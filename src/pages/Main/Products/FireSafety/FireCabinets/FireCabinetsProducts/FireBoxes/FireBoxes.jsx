import React from 'react';
import FilterProducts from '../../../../FilterProducts/FilterProducts';
import ProductsMap from '../../../../../../../components/ProductsMap';
import PopularMain from '../../../../PopularMain/PopularMain';
import News from '../../../../../News/News';

export default function FireBoxes() {

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
            <a className='boxPath-container__text' href="/fire-safety">Пожежна продукція</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/fire-cabinets">Пожежні шафи</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/fire-boxes">Ящики пожежні</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Ящики пожежні</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='ящики пожежні' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='ящики пожежні' popular={true} />

      <News />
    </>
  );
}
