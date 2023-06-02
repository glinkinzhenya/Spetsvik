import React from 'react';
import './FireHoses.css';
import News from '../../../News/News';
import PopularGoodsFireHoses from './PopularGoodsFireHoses/PopularGoodsFireHoses';

export default function FireHoses() {

  return (
    <>
      <div className='fireHoses'>
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
            <a className='boxPath-container__text' href="/fire-hoses">Пожежні рукава</a>
          </div>

        </div>
        <div className='fireHoses-container container'>
          <h2 className='fireHoses-mainTitle'>ПОЖЕЖНІ РУКАВА</h2>
        </div>

        <div className='fireHoses-baner'>
          <img className='fireHoses-baner__image' src="./img/stock-rukav.jpg" alt="" />
        </div>

        <div className='fireHoses-container container'>
          <h3 className='fireHoses-secondaryTitle'>Основні категорії</h3>

          <div className='fireHoses-box'>

            <a className='fireHoses-box__item' href="/pressure-hoses">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses1.jpeg" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>РУКАВА ПОЖЕЖНІ НАПІРНІ</div>
              </div>
            </a>

            <a className='fireHoses-box__item' href="/fire-barrels">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses2.jpeg" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>СТВОЛИ ПОЖЕЖНІ</div>
              </div>
            </a>

            <a className='fireHoses-box__item' href="/fire-connecting-heads">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses7.jpeg" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>ГОЛОВКИ ПОЖЕЖНІ З'ЄДНУАЛЬНІ</div>
              </div>
            </a>

            <a className='fireHoses-box__item' href="/fire-hydrants">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses3.jpeg" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>КРАНИ ПОЖЕЖНІ, КЛАПАНИ ПОЖЕЖНІ, ВЕНТИЛІ ПОЖЕЖНОГО КРАНУ</div>
              </div>
            </a>

            <a className='fireHoses-box__item' href="/fire-columns">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses4.jpeg" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>ПОЖЕЖНІ КОЛОНКИ І ГІДРАНТИ ПОЖЕЖНІ</div>
              </div>
            </a>

            <a className='fireHoses-box__item' href="/stands-for-hydrants">
              <div className='fireHoses-box__item-picture'>
                <img className='fireHoses-box__item-image' src="./img/fire-hoses6.png" alt="" />
              </div>
              <div className='fireHoses-box__item-bg'>
                <div className='fireHoses-box__item-text'>ПІДСТАВКИ ДЛЯ ГІДРАНТА ПОЖЕЖНОГО</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <PopularGoodsFireHoses />
      <News />
    </>
  );
}
