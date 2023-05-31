import React from 'react';
import './IndividualProtection.css';
import News from '../../News/News';
import PopularGoodsIndividual from './PopularGoodsIndividual/PopularGoodsIndividual';

export default function IndividualProtection() {

  return (
    <>
      <div className='individualProtection'>
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

            <a className='boxPath-container__text' href="/individual-protection">Засоби індивідуального захисту</a>
          </div>

        </div>
        <div className='individualProtection-container container'>
          <h2 className='individualProtection-mainTitle'>ЗАСОБИ ІНДИВІДУАЛЬНОГО ЗАХИСТУ</h2>
        </div>

        <div className='individualProtection-baner'>
          <img className='individualProtection-baner__image' src="./img/individual2.jpeg" alt="" />
        </div>

        <div className='individualProtection-container container'>
          <h3 className='individualProtection-secondaryTitle'>Основні категорії</h3>
          <div className='individualProtection-box'>

            <a className='individualProtection-box__item' href="/hand-protection-equipment">
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/individual_1.jpeg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ РУК</div>
              </div>
            </a>

            <a className='individualProtection-box__item' href="/eye-protection">
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/individual2.jpeg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ ОЧЕЙ, ОБЛИЧЧЯ, ГОЛОВИ</div>
              </div>
            </a>

            <a className='individualProtection-box__item' href="/respiratory-protection">
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/individual_3.jpeg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>ЗАСОБИ ЗАХИСТУ ОРГАНІВ ДИХАННЯ</div>
              </div>
            </a>

            <a className='individualProtection-box__item' href="/signaling-products">
              <div className='individualProtection-box__item-picture'>
                <img className='individualProtection-box__item-image' src="./img/individual_4.jpeg" alt="" />
              </div>
              <div className='individualProtection-box__item-bg'>
                <div className='individualProtection-box__item-text'>СИГНАЛЬНА ПРОДУКЦІЯ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <PopularGoodsIndividual />
      <News />
    </>
  );
}
