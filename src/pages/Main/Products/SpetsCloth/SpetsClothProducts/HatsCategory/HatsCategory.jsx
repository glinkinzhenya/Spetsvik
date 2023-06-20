import React from 'react';
import './HatsCategory.css';
import News from '../../../../News/News';
// import News from '../../../../News/News';

export default function HatsCategory() {

  return (
    <>
      <div className='hatsCategory'>
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
            <a className='boxPath-container__text' href="/hats-category">Головні убори</a>
          </div>

        </div>
        <div className='hatsCategory-container container'>
          <h2 className='hatsCategory-mainTitle'>ГОЛОВНІ УБОРИ</h2>
        </div>

        <div className='hatsCategory-baner'>
          <img className='hatsCategory-baner__image' src="./img/stock_baseball_cap.jpeg" alt="" />
        </div>

        <div className='hatsCategory-container container'>
          <h3 className='hatsCategory-secondaryTitle'>Основні категорії</h3>

          <div className='hatsCategory-box'>

            <a className='hatsCategory-box__item' href="/hats">
              <div className='hatsCategory-box__item-picture'>
                <img className='hatsCategory-box__item-image' src="./img/stock_baseball_cap.jpeg" alt="" />
              </div>
              <div className='hatsCategory-box__item-bg'>
                <div className='hatsCategory-box__item-text'>ШАПКИ</div>
              </div>
            </a>

            <a className='hatsCategory-box__item' href="/сaps">
              <div className='hatsCategory-box__item-picture'>
                <img className='hatsCategory-box__item-image' src="./img/stock_baseball_cap.jpeg" alt="" />
              </div>
              <div className='hatsCategory-box__item-bg'>
                <div className='hatsCategory-box__item-text'>КЕПКИ</div>
              </div>
            </a>

            <a className='hatsCategory-box__item' href="/buffs">
              <div className='hatsCategory-box__item-picture'>
                <img className='hatsCategory-box__item-image' src="./img/stock_baseball_cap.jpeg" alt="" />
              </div>
              <div className='hatsCategory-box__item-bg'>
                <div className='hatsCategory-box__item-text'>БАФИ</div>
              </div>
            </a>


          </div>
        </div>
      </div>

      <News />
    </>
  );
}
