import React from 'react';
import FilterProducts from '../../../../FilterProducts/FilterProducts';
import ProductsMap from '../../../../../../../components/ProductsMap';
import PopularMain from '../../../../PopularMain/PopularMain';
import News from '../../../../../News/News';

export default function FireShieldsAndStands() {

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
            <a className='boxPath-container__text' href="/fire-shields-and-stands">Пожежні щити та стенди</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Пожежні щити та стенди</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='пожежні щити та стенди' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='пожежні щити та стенди' popular={true} />

      <News />
    </>
  );
}
