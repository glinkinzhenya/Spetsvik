import React from 'react';
import './FireSafety.css';
import News from '../../News/News';
import PopularGoodsFireSafety from './PopularGoodsFireSafety/PopularGoodsFireSafety';
// import Stock from '../Stock/Stock';

export default function FireSafety() {

  return (
    <>
      <div className='fireSafety'>
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
          </div>

        </div>
        <div className='fireSafety-container container'>
          <h2 className='fireSafety-mainTitle'>ПОЖЕЖНА ПРОДУКЦІЯ</h2>
        </div>

        <div className='fireSafety-baner'>
          <img className='fireSafety-baner__image' src="./img/fire-extinguisher.png" alt="" />
        </div>

        <div className='fireSafety-container container'>
          <h3 className='fireSafety-secondaryTitle'>Основні категорії</h3>

          <div className='fireSafety-box'>
            <a className='fireSafety-box__item' href="/fire-extinguishers">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/fire-main.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ВОГНЕГАСНИКИ</div>
              </div>
            </a>

            <a className='fireSafety-box__item' href=" /fire-cabinets">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/stock_building_fire.jpeg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ПОЖЕЖНІ ШАФИ, ЩИТИ, СТЕНДИ</div>
              </div>
            </a>

            <div className='fireSafety-box__item'>
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/stock_rukav_fire.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ПОЖЕЖНІ РУКАВИ, КРАНИ, ГІДРАНТИ, МОТОПОМПИ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularGoodsFireSafety />
      {/* <Stock /> */}
      <News />
    </>
  );
}
