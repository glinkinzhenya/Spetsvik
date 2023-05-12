import React from 'react';
import './FireSafety.css';

export default function FireSafety() {

  return (
    <div className='fireSafety'>
      <div className='boxPath'>
        <div className='boxPath-container container'>
          <div className='boxPath-container__text'>Головна</div>
          <div className='boxPath-container__arrow'>*</div>
          <div className='boxPath-container__text'>Товари</div>
          <div className='boxPath-container__arrow'>*</div>
          <div className='boxPath-container__text'>Пожежна продукція</div>
        </div>

      </div>
      <div className='fireSafety-container container'>
        <h2 className='fireSafety-mainTitle'>ПОЖЕЖНА ПРОДУКЦІЯ</h2>


      </div>

      <div className='fireSafety-baner'></div>

      <div className='fireSafety-container container'>
      <h3 className='fireSafety-secondaryTitle'>Основні категорії</h3>
        
        <div className='fireSafety-box'>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
          <div className='fireSafety-box__item'></div>
        </div>
      </div>
    </div>
  );
}
