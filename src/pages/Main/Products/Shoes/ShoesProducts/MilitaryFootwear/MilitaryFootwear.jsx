import React from 'react';
import './MilitaryFootwear.css';
import News from '../../../../News/News';

export default function MilitaryFootwear() {

  return (
    <>
      <div className='militaryFootwear'>
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
            <a className='boxPath-container__text' href="/military-footwear">Військове взуття</a>
          </div>

        </div>
        <div className='militaryFootwear-container container'>
          <h2 className='militaryFootwear-mainTitle'>ВІЙСЬКОВЕ ВЗУТТЯ</h2>
        </div>

        <div className='militaryFootwear-baner'>
          {/* <img className='militaryFootwear-baner__image' src="./img/militaryShoes2.JPG" alt="" /> */}
          <img className='militaryFootwear-baner__image' src="./img/militaryShoes2_1.JPG" alt="" />
        </div>

        <div className='militaryFootwear-container container'>
          <h3 className='militaryFootwear-secondaryTitle'>Основні категорії</h3>

          <div className='militaryFootwear-box'>

            <a className='militaryFootwear-box__item' href="/winter-military-footwear">
              <div className='militaryFootwear-box__item-picture'>
                <img className='militaryFootwear-box__item-image' src="./img/militaryShoes2.JPG" alt="" />
              </div>
              <div className='militaryFootwear-box__item-bg'>
                <div className='militaryFootwear-box__item-text'>ЗИМОВЕ ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </a>

            <a className='militaryFootwear-box__item' href="/summer-military-footwear">
              <div className='militaryFootwear-box__item-picture'>
                <img className='militaryFootwear-box__item-image' src="./img/militaryShoes2.JPG" alt="" />
              </div>
              <div className='militaryFootwear-box__item-bg'>
                <div className='militaryFootwear-box__item-text'>ЛІТНЄ ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </a>

            <a className='militaryFootwear-box__item' href="/low-military-shoes">
              <div className='militaryFootwear-box__item-picture'>
                <img className='militaryFootwear-box__item-image' src="./img/militaryShoes2.JPG" alt="" />
              </div>
              <div className='militaryFootwear-box__item-bg'>
                <div className='militaryFootwear-box__item-text'>НИЗЬКЕ ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </a>

            <a className='militaryFootwear-box__item' href="/high-military-shoes">
              <div className='militaryFootwear-box__item-picture'>
                <img className='militaryFootwear-box__item-image' src="./img/militaryShoes2.JPG" alt="" />
              </div>
              <div className='militaryFootwear-box__item-bg'>
                <div className='militaryFootwear-box__item-text'>ВИСОКЕ ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </a>

          </div>
        </div>
      </div>

      <News />
    </>
  );
}
