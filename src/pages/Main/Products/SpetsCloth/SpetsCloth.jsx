import React from 'react';
import './SpetsCloth.css';
import News from '../../News/News';
import PopularGoodsSpetsCloth from './PopularGoodsSpetsCloth/PopularGoodsSpetsCloth';

export default function SpetsCloth() {

  return (
    <>
      <div className='spetsCloth'>
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
          </div>

        </div>
        <div className='spetsCloth-container container'>
          <h2 className='spetsCloth-mainTitle'>СПЕЦОДЯГ</h2>
        </div>

        <div className='spetsCloth-baner'>
          <img className='spetsCloth-baner__image' src="./img/jackets.jpg" alt="" />
        </div>

        <div className='spetsCloth-container container'>
          <h3 className='spetsCloth-secondaryTitle'>Основні категорії</h3>

          <div className='spetsCloth-box'>

            
          <a className='spetsCloth-box__item' href="/work-robes">
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_portrait.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ХАЛАТИ РОБОЧІ</div>
              </div>

            </a>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_medical.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>МЕДИЧНИЙ, КУХАРСЬКИЙ,
                  КЛІНІНГОВИЙ ОДЯГ</div>
              </div>
            </div>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_spets.jpg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>УТЕПЛЕНИЙ СПЕЦОДЯГ</div>
              </div>
            </div>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_worker.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>КОСТЮМИ РОБОЧІ</div>
              </div>
            </div>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/spets-cloth1.jpg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ЗАХИСНИЙ СПЕЦОДЯГ</div>
              </div>
            </div>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_optimistic.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ФАРТУХИ РОБОЧІ</div>
              </div>
            </div>

            <div className='spetsCloth-box__item'>
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_baseball_cap.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ГОЛОВНІ УБОРИ</div>
              </div>
            </div>
            

            <a className='spetsCloth-box__item' href="/individual-protection">
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/stock_working.jpeg" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ЗАСОБИ ІНДИВІДУАЛЬНОГО ЗАХИСТУ</div>
              </div>
            </a>

            <a className='spetsCloth-box__item' href="/shoes">
              <div className='spetsCloth-box__item-picture'>
                <img className='spetsCloth-box__item-image' src="./img/militaryShoes2.JPG" alt="" />
              </div>
              <div className='spetsCloth-box__item-bg'>
                <div className='spetsCloth-box__item-text'>ВЗУТТЯ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <PopularGoodsSpetsCloth />
      <News />
    </>
  );
}
