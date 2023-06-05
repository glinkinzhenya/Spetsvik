import React from 'react';
import ProductsMap from '../../../../../../../components/ProductsMap';
import PopularMain from '../../../../PopularMain/PopularMain';
import News from '../../../../../News/News';

export default function StandsAndFasteners() {

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
            <a className='boxPath-container__text' href="/fire-extinguishers">Вогнегасники</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/stands-and-fasteners">Підставки та кріплення під вогнегасники</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Підставки та кріплення під вогнегасники</h3>

              <ProductsMap category='підставки та кріплення під вогнегасники' />

        </div>
      </div>

      <PopularMain category='підставки та кріплення під вогнегасники' popular={true} />

      <News />
    </>
  );
}
