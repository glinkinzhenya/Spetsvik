import React from 'react';
import './MilitaryEquipment.css';
import News from '../../News/News';
// import PopularGoodsFireSafety from './PopularGoodsFireSafety/PopularGoodsFireSafety';

export default function MilitaryEquipment() {

  return (
    <>
      <div className='fireSafety'>
        <div className='boxPath'>
          <div className='boxPath-container container'>
            <a className='boxPath-container__text' href="/">Головна</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/military-equipment">Військова екіпіровка</a>
          </div>

        </div>
        <div className='fireSafety-container container'>
          <h2 className='fireSafety-mainTitle'>ВІЙСЬКОВА ЕКІПІРОВКА</h2>
        </div>

        <div className='fireSafety-baner'>
          <img className='fireSafety-baner__image' src="./img/fire-extinguisher.png" alt="" />
        </div>

        <div className='fireSafety-container container'>
          <h3 className='fireSafety-secondaryTitle'>Основні категорії</h3>

          <div className='fireSafety-box'>
            <a className='fireSafety-box__item' href="/fire-extinguishers">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/MilitaryEquipment1.png" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ДОЩОВИКИ</div>
              </div>
            </a>

            <a className='fireSafety-box__item' href="/fire-cabinets">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/MilitaryEquipment2.png" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ЖИЛЕТИ</div>
              </div>
            </a>

            <a className='fireSafety-box__item' href="/fire-hoses">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/MilitaryEquipment3.png" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>ЗБРОЙОВІ РЕМЕНІ</div>
              </div>
            </a>

            <a className='fireSafety-box__item' href="/fire-hoses">
              <div className='fireSafety-box__item-picture'>
                <img className='fireSafety-box__item-image' src="./img/MilitaryEquipment4.png" alt="" />
              </div>
              <div className='fireSafety-box__item-bg'>
                <div className='fireSafety-box__item-text'>КОМПЛЕКТИ УНІФОРМИ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      {/* <PopularGoodsFireSafety /> */}
      <News />
    </>
  );
}
