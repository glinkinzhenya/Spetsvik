import React from 'react';
import ProductsMap from '../../../../../../../../components/ProductsMap';
import PopularMain from '../../../../../PopularMain/PopularMain';
import News from '../../../../../../News/News';

export default function Balaclavas() {

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
            <a className='boxPath-container__text' href="/hats-category">Головні убори</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/balaclavas">Балаклави</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Балаклави</h3>
     
              <ProductsMap category='балаклави' />
     
        </div>
      </div>

      <PopularMain category='балаклави' popular={true} />

      <News />
    </>
  );
}
