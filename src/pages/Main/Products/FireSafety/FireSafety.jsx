import React from 'react';
import './FireSafety.css';
import PopularGoods from '../PopularGoods/PopularGoods';
import Stock from '../Stock/Stock';

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
          <img className='fireSafety-baner__image' src="./img/backpack.jpg" alt="" />
        </div>

        <div className='fireSafety-container container'>
          <h3 className='fireSafety-secondaryTitle'>Основні категорії</h3>

          <div className='fireSafety-box'>
            <div className='fireSafety-box__item'>
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ХАЛАТИ РОБОЧІ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>МЕДИЧНИЙ, КУХАРСЬКИЙ,
                  КЛІНІНГОВИЙ ОДЯГ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>УТЕПЛЕНИЙ СПЕЦОДЯГ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>КОСТЮМИ РОБОЧІ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ЗАХИСНИЙ СПЕЦОДЯГ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ФАРТУХИ РОБОЧІ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ГОЛОВНІ УБОРИ</div>
              </div>
            </div>

            <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/body-armor.jpg" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ЗАСОБИ ІНДИВІДУАЛЬНОГО ЗАХИСТУ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularGoods />
      <Stock />
    </>
  );
}
