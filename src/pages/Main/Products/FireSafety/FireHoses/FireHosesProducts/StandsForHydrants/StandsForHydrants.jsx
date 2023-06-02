import React from 'react';
import FilterProducts from '../../../../FilterProducts/FilterProducts';
import ProductsMap from '../../../../../../../components/ProductsMap';
import PopularMain from '../../../../PopularMain/PopularMain';
import News from '../../../../../News/News';

export default function StandsForHydrants() {

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
            <a className='boxPath-container__text' href="/fire-hoses">Пожежні рукава</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/stands-for-hydrants">Підставки для гідранта пожежного</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Підставки для гідранта пожежного</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='підставки для гідранта пожежного' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='підставки для гідранта пожежного' popular={true} />

      <News />
    </>
  );
}
