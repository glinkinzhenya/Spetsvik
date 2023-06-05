import React from 'react';
import './FireExtinguishers.css';
import News from '../../../News/News';

export default function FireExtinguishers() {

  return (
    <>
      <div className='fireExtinguishers'>
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
            <a className='boxPath-container__text' href="/fire-extinguishers">Вогнегасники</a>
          </div>

        </div>
        <div className='fireExtinguishers-container container'>
          <h2 className='fireExtinguishers-mainTitle'>ВОГНЕГАСНИКИ</h2>
        </div>

        <div className='fireExtinguishers-baner'>
          <img className='fireExtinguishers-baner__image' src="./img/fireExtinguishers1_1.jpg" alt="" />
        </div>

        <div className='fireExtinguishers-container container'>
          <h3 className='fireExtinguishers-secondaryTitle'>Основні категорії</h3>

          <div className='fireExtinguishers-box'>

            <a className='fireExtinguishers-box__item' href="/powder-fire-extinguishers">
              <div className='fireExtinguishers-box__item-picture'>
                <img className='fireExtinguishers-box__item-image' src="./img/fireExtinguishers1.jpg" alt="" />
              </div>
              <div className='fireExtinguishers-box__item-bg'>
                <div className='fireExtinguishers-box__item-text'>ВОГНЕГАСНИКИ ПОРОШКОВІ</div>
              </div>
            </a>

            <a className='fireExtinguishers-box__item' href="/acid-fire-extinguishers">
              <div className='fireExtinguishers-box__item-picture'>
                <img className='fireExtinguishers-box__item-image' src="./img/fireExtinguishers2.jpeg" alt="" />
              </div>
              <div className='fireExtinguishers-box__item-bg'>
                <div className='fireExtinguishers-box__item-text'>ВОГНЕГАСНИКИ ВУГЛЕКИСЛОТНІ</div>
              </div>
            </a>

            <a className='fireExtinguishers-box__item' href="/stands-and-fasteners">
              <div className='fireExtinguishers-box__item-picture'>
                <img className='fireExtinguishers-box__item-image' src="./img/fireExtinguishers3.jpg" alt="" />
              </div>
              <div className='fireExtinguishers-box__item-bg'>
                <div className='fireExtinguishers-box__item-text'>ПІДСТАВКИ ТА КРІПЛЕННЯ ПІД ВОГНЕГАСНИКИ</div>
              </div>
            </a>

            <a className='fireExtinguishers-box__item' href="/components-for-fire-extinguishers">
              <div className='fireExtinguishers-box__item-picture'>
                <img className='fireExtinguishers-box__item-image' src="./img/fireExtinguishers4.jpg" alt="" />
              </div>
              <div className='fireExtinguishers-box__item-bg'>
                <div className='fireExtinguishers-box__item-text'>КОМПЛЕКТУЮЧІ ДО ВОГНЕГАСНИКІВ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <News />
    </>
  );
}
