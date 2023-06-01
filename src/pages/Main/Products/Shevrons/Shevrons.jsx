import React from 'react';
import './Shevrons.css';
import News from '../../News/News';
// import PopularGoodsShevrons from './PopularGoodsShevrons/PopularGoodsShevrons';

export default function Shevrons() {

  return (
    <>
      <div className='shevrons'>
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

            <a className='boxPath-container__text' href="/shevrons">Шеврони</a>
          </div>

        </div>
        <div className='shevrons-container container'>
          <h2 className='shevrons-mainTitle'>ШЕВРОНИ</h2>
        </div>

        <div className='shevrons-baner'>
          <img className='shevrons-baner__image' src="./img/shevronspng.png" alt="" />
        </div>

        <div className='shevrons-container container'>
          <h3 className='shevrons-secondaryTitle'>Основні категорії</h3>

          <div className='shevrons-box'>
            
            <a className='shevrons-box__item' href="/shevrons-item">
              <div className='shevrons-box__item-picture'>
                <img className='shevrons-box__item-image' src="./img/shevronspng.png" alt="" />
              </div>
              <div className='shevrons-box__item-bg'>
                <div className='shevrons-box__item-text'>ШЕВРОНИ</div>
              </div>
            </a>


          </div>
        </div>
      </div>
      {/* <PopularGoodsShevrons /> */}
      <News />
    </>
  );
}
