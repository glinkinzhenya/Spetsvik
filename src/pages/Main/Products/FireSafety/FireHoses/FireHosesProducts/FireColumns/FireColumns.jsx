import React from 'react';
import FilterProducts from '../../../../FilterProducts/FilterProducts';
import ProductsMap from '../../../../../../../components/ProductsMap';
import PopularMain from '../../../../PopularMain/PopularMain';
import News from '../../../../../News/News';

export default function FireColumns() {

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
            <a className='boxPath-container__text' href="/fire-columns">Пожежні колонки и гідранти пожежні</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Пожежні колонки и гідранти пожежні</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='пожежні колонки и гідранти пожежні' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='пожежні колонки и гідранти пожежні' popular={true} />

      <News />
    </>
  );
}
