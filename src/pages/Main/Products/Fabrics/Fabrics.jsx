import React from 'react';
import './Fabrics.css';
import News from '../../News/News';
import PopularGoodsSpetsFabrics from '../PopularGoodsSpetsFabrics/PopularGoodsSpetsFabrics';

export default function Fabrics() {

  return (
    <>
      <div className='fabrics'>
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

            <a className='boxPath-container__text' href="/spets-cloth">Тканини</a>
          </div>

        </div>
        <div className='fabrics-container container'>
          <h2 className='fabrics-mainTitle'>ТКАНИНИ</h2>
        </div>

        <div className='fabrics-baner'>
          <img className='fabrics-baner__image' src="./img/blanket.png" alt="" />
        </div>

        <div className='fabrics-container container'>
          <h3 className='fabrics-secondaryTitle'>Основні категорії</h3>

          <div className='fabrics-box'>
            <div className='fabrics-box__item'>
              <div className='fabrics-box__item-picture1'>
                {/* <img className='fabrics-box__item-image' src="./img/stock_portrait.jpeg" alt="" /> */}
              </div>
              <div className='fabrics-box__item-bg'>
                <div className='fabrics-box__item-text'>ТКАНИНА № 1</div>
              </div>
            </div>

            <div className='fabrics-box__item'>
              <div className='fabrics-box__item-picture2'>
                {/* <img className='fabrics-box__item-image' src="./img/stock_medical.jpeg" alt="" /> */}
              </div>
              <div className='fabrics-box__item-bg'>
                <div className='fabrics-box__item-text'>ТКАНИНА № 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularGoodsSpetsFabrics />
      <News />
    </>
  );
}
