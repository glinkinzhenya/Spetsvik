import React from 'react';
import './Fabrics.css';
import News from '../../News/News';

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

            <a className='boxPath-container__text' href="/fabrics">Тканини</a>
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

            <a className='fabrics-box__item' href="/technical-fabrics">
              <div className='fabrics-box__item-picture'>
                <img className='fabrics-box__item-image' src="./img/fabrics1.jpg" alt="" />
              </div>
              <div className='fabrics-box__item-bg'>
                <div className='fabrics-box__item-text'>ТЕХНІЧНІ ТКАНИНИ</div>
              </div>
            </a>

            <a className='fabrics-box__item' href="/strict-filter-fabrics">
              <div className='fabrics-box__item-picture'>
                <img className='fabrics-box__item-image' src="./img/fabrics.jpg" alt="" />
              </div>
              <div className='fabrics-box__item-bg'>
                <div className='fabrics-box__item-text'>СУВОРІ ФІЛЬТРУВАЛЬНІ ТКАНИНИ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <News />
    </>
  );
}
