import React from 'react';
import News from '../../../../../../News/News';
import ProductsMap from '../../../../../../../../components/ProductsMap';
import PopularMain from '../../../../../PopularMain/PopularMain';

export default function LowMilitaryShoes() {

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
            <a className='boxPath-container__text' href="/shoes">Взуття</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/military-footwear">Військове взуття</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/low-military-shoes">Низьке військове взуття</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Низьке військове взуття</h3>

              <ProductsMap category='низьке військове взуття' />
              
        </div>
      </div>

      <PopularMain category='низьке військове взуття' popular={true} />

      <News />
    </>
  );
}
