import React from 'react';
import './FireCabinets.css';
import News from '../../../News/News';

export default function FireCabinets() {

  return (
    <>
      <div className='fireCabinets'>
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
          </div>

        </div>
        <div className='fireCabinets-container container'>
          <h2 className='fireCabinets-mainTitle'>ПОЖЕЖНІ ШАФИ</h2>
        </div>

        <div className='fireCabinets-baner'>
          <img className='fireCabinets-baner__image' src="./img/stock_building_fire.jpeg" alt="" />
        </div>

        <div className='fireCabinets-container container'>
          <h3 className='fireCabinets-secondaryTitle'>Основні категорії</h3>

          <div className='fireCabinets-box'>

            <a className='fireCabinets-box__item' href="/fire-cabinets-item">
              <div className='fireCabinets-box__item-picture'>
                <img className='fireCabinets-box__item-image' src="./img/fire-cabinets1.jpg" alt="" />
              </div>
              <div className='fireCabinets-box__item-bg'>
                <div className='fireCabinets-box__item-text'>ПОЖЕЖНІ ШАФИ</div>
              </div>
            </a>

            <a className='fireCabinets-box__item' href="/fire-shields-and-stands">
              <div className='fireCabinets-box__item-picture'>
                <img className='fireCabinets-box__item-image' src="./img/fire-cabinets2.jpeg" alt="" />
              </div>
              <div className='fireCabinets-box__item-bg'>
                <div className='fireCabinets-box__item-text'>ПОЖЕЖНІ ЩИТИ ТА СТЕНДИ</div>
              </div>
            </a>

            <a className='fireCabinets-box__item' href="/fire-equipment">
              <div className='fireCabinets-box__item-picture'>
                <img className='fireCabinets-box__item-image' src="./img/fire-cabinets3.jpeg" alt="" />
              </div>
              <div className='fireCabinets-box__item-bg'>
                <div className='fireCabinets-box__item-text'>ПОЖЕЖНИЙ ІНВЕНТАР</div>
              </div>
            </a>

            <a className='fireCabinets-box__item' href="/fire-boxes">
              <div className='fireCabinets-box__item-picture'>
                <img className='fireCabinets-box__item-image' src="./img/fireCabinets1.png" alt="" />
              </div>
              <div className='fireCabinets-box__item-bg'>
                <div className='fireCabinets-box__item-text'>ЯЩИКИ ПОЖЕЖНІ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <News />
    </>
  );
}
