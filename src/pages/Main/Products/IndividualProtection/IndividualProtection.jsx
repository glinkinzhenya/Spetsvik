import React from 'react';
import './IndividualProtection.css';
import News from '../../News/News';
import PopularGoodsFireSafety from '../PopularGoodsFireSafety/PopularGoodsFireSafety';

export default function IndividualProtection() {

  return (
    <>
      <div className='individualProtection'>
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

            <a className='boxPath-container__text' href="/individual-protection">Засоби індивідуального захисту</a>
          </div>

        </div>
        <div className='individualProtection-container container'>
          <h2 className='individualProtection-mainTitle'>ЗАСОБИ ІНДИВІДУАЛЬНОГО ЗАХИСТУ</h2>
        </div>

        <div className='individualProtection-baner'>
          <img className='individualProtection-baner__image' src="./img/fire-extinguisher.png" alt="" />
        </div>

        <div className='individualProtection-container container'>
          <h3 className='individualProtection-secondaryTitle'>Основні категорії</h3>

          <div className='individualProtection-box'>
            <div className='individualProtection-box__item'>
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/fire-extinguisher.png" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ РУК</div>
              </div>
            </div>

            <div className='individualProtection-box__item'>
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/stock_building_fire.jpeg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ ОЧЕЙ, ОБЛИЧЧЯ, ГОЛОВИ</div>
              </div>
            </div>

            <div className='individualProtection-box__item'>
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/stock_rukav_fire.jpg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ ОРГАНІВ ДИХАННЯ</div>
              </div>
            </div>

            <div className='individualProtection-box__item'>
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/stock_rukav_fire.jpg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>СИГНАЛЬНА ПРОДУКЦІЯ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularGoodsFireSafety />
      <News />
    </>
  );
}
