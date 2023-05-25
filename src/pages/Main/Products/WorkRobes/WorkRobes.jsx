import React from 'react';
// import ProductsMap from '../../../../components/ProductsMap';
import './WorkRobes.css';
import ProductsMap from '../../../../components/ProductsMap';

export default function WorkRobes() {

  return (
    <>
      <div className='workRobes'>
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
            <a className='boxPath-container__text' href="/work-robes">Халати робочі</a>
          </div>
        </div>

        {/* <div className='workRobes-container container'>
          <h2 className='workRobes-mainTitle'>WorkRobes</h2>
        </div> */}

        {/* <div className='workRobes-baner'>
          <img className='workRobes-baner__image' src="./img/jackets.jpg" alt="" />
        </div> */}

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Халати робочі</h3>

          <div className='workRobes-box'>
            <div className='workRobes-box__left'>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 1</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 2</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 3</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 4</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 5</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 6</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 7</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 8</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 9</div>
              <div className='workRobes-box__left-item'>ФИЛЬТРЫ 10</div>
            </div>

            <ProductsMap category='халати робочі' />

          </div>
        </div>
      </div>

    </>
  );
}
