import React from 'react';
import './Shoes.css';
import News from '../../News/News';
import PopularGoodsShoes from './PopularGoodsShoes/PopularGoodsShoes';

export default function Shoes() {

  return (
    <>
      <div className='shoes'>
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
          </div>

        </div>
        <div className='shoes-container container'>
          <h2 className='shoes-mainTitle'>ВЗУТТЯ</h2>
        </div>

        <div className='shoes-baner'>
          <img className='shoes-baner__image' src="./img/militaryShoes2.JPG" alt="" />
        </div>

        <div className='shoes-container container'>
          <h3 className='shoes-secondaryTitle'>Основні категорії</h3>

          <div className='shoes-box'>
            <div className='shoes-box__item'>
              <div className='shoes-box__item-picture'>
                <img className='shoes-box__item-image' src="./img/spetsShoes.jpg" alt="" />
              </div>
              <div className='shoes-box__item-bg'>
                <div className='shoes-box__item-text'>СПЕЦВЗУТТЯ</div>
              </div>
            </div>

            <div className='shoes-box__item'>
              <div className='shoes-box__item-picture'>
                <img className='shoes-box__item-image' src="./img/militaryShoes.png" alt="" />
              </div>
              <div className='shoes-box__item-bg'>
                <div className='shoes-box__item-text'>ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularGoodsShoes />
      <News />
    </>
  );
}
