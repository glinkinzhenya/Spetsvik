import React from 'react';
import FilterProducts from '../../../FilterProducts/FilterProducts';
import ProductsMap from '../../../../../../components/ProductsMap';
import PopularMain from '../../../PopularMain/PopularMain';
import News from '../../../../News/News';

export default function ScarfPipes() {

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
            <a className='boxPath-container__text' href="/scarf-pipes">Шарф-труби</a>
          </div>
        </div>

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Шарф-труби</h3>

          <div className='workRobes-box'>

            <FilterProducts />

            <div className='workRobes-box__productsMap'>
              <ProductsMap category='шарф-труби' />
            </div>
          </div>
        </div>
      </div>

      <PopularMain category='шарф-труби' popular={true} />

      <News />
    </>
  );
}
