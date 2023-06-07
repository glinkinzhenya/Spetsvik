import React from 'react';
import './SpecialShoes.css';
import News from '../../../../News/News';

export default function SpecialShoes() {

  return (
    <>
      <div className='specialShoes'>
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
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/special-shoes">Спецвзуття</a>
          </div>

        </div>
        <div className='specialShoes-container container'>
          <h2 className='specialShoes-mainTitle'>СПЕЦВЗУТТЯ</h2>
        </div>

        <div className='specialShoes-baner'>
          <img className='specialShoes-baner__image' src="./img/spetsShoespng.png" alt="" />
        </div>

        <div className='specialShoes-container container'>
          <h3 className='specialShoes-secondaryTitle'>Основні категорії</h3>

          <div className='specialShoes-box'>

            <a className='specialShoes-box__item' href="/winter-special-shoes">
              <div className='specialShoes-box__item-picture'>
                <img className='specialShoes-box__item-image' src="./img/spetsShoespng.png" alt="" />
              </div>
              <div className='specialShoes-box__item-bg'>
                <div className='specialShoes-box__item-text'>ЗИМОВЕ СПЕЦВЗУТТЯ</div>
              </div>
            </a>

            <a className='specialShoes-box__item' href="/summer-special-shoes">
              <div className='specialShoes-box__item-picture'>
                <img className='specialShoes-box__item-image' src="./img/spetsShoespng.png" alt="" />
              </div>
              <div className='specialShoes-box__item-bg'>
                <div className='specialShoes-box__item-text'>ЛІТНЄ СПЕЦВЗУТТЯ</div>
              </div>
            </a>

            <a className='specialShoes-box__item' href="/low-special-shoes">
              <div className='specialShoes-box__item-picture'>
                <img className='specialShoes-box__item-image' src="./img/spetsShoespng.png" alt="" />
              </div>
              <div className='specialShoes-box__item-bg'>
                <div className='specialShoes-box__item-text'>НИЗЬКЕ СПЕЦВЗУТТЯ</div>
              </div>
            </a>

            <a className='specialShoes-box__item' href="/high-special-shoes">
              <div className='specialShoes-box__item-picture'>
                <img className='specialShoes-box__item-image' src="./img/spetsShoespng.png" alt="" />
              </div>
              <div className='specialShoes-box__item-bg'>
                <div className='specialShoes-box__item-text'>ВИСОКЕ СПЕЦВЗУТТЯ</div>
              </div>
            </a>

          </div>
        </div>
      </div>

      <News />
    </>
  );
}
