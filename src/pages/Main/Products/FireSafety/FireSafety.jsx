import React from 'react';
import './FireSafety.css';
import PopularGoods from '../PopularGoods/PopularGoods';

export default function FireSafety() {

  return (
    <>
   
    <div className='fireSafety'>
      <div className='boxPath'>
        <div className='boxPath-container container'>
          <div className='boxPath-container__text'>Головна</div>
          <div className='boxPath-container__arrow'>*</div>
          <div className='boxPath-container__text'>Товари</div>
          <div className='boxPath-container__arrow'>*</div>
          <div className='boxPath-container__text'>Пожежна продукція</div>
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
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>ХАЛАТИ РОБОЧІ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>МЕДИЧНИЙ, КУХАРСЬКИЙ,
                КЛІНІНГОВИЙ ОДЯГ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>УТЕПЛЕНИЙ СПЕЦОДЯГ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>КОСТЮМИ РОБОЧІ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>ЗАХИСНИЙ СПЕЦОДЯГ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>ФАРТУХИ РОБОЧІ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>ГОЛОВНІ УБОРИ</div>
            </div>
          </div>

          <div className='fireSafety-box__item'>
            <div className='fireSafety-box__item-bg'>
              <div className='fireSafety-box__item-text'>ЗАСОБИ ІНДИВІДУАЛЬНОГО
                ЗАХИСТУ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopularGoods />
    </>
  );
}
