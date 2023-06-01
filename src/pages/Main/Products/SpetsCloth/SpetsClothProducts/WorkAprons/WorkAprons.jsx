import React from 'react';
import ProductsMap from '../../../../../../components/ProductsMap';
import FilterProducts from '../../../FilterProducts/FilterProducts';
import PopularMain from '../../PopularMain/PopularMain';
import News from '../../../../News/News';

export default function WorkAprons() {

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
            <a className='boxPath-container__text' href="/work-aprons">Фартухи робочі</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Фартухи робочі</h3>

          <div className='workRobes-box'>

            <FilterProducts />


            <div className='workRobes-box__productsMap'>
              <ProductsMap category='фартухи робочі' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='фартухи робочі' popular={true} />

      <News />
    </>
  );
}
