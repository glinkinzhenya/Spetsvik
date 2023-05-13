import React from 'react';
import './Stock.css';

export default function Stock() {

  return (
    <div className='stock'>
      <div className='stock-container container'>
        <h3 className='stock-secondaryTitle'>Акції</h3>

        <div className='stock-box'>

          <div className='stock-box__item'>
            <div className='stock-box__item-picture'>
              <img className='stock-box__item-image' src="./img/err1.jpg" alt="" />
            </div>
            <div className='stock-box__item-bg'>
              <div className='stock-box__item-name'>РЮКЗАК "СМІЛИВІСТЬ"</div>
              <div className='stock-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='stock-box__item'>
            <div className='stock-box__item-picture'>
              <img className='stock-box__item-image' src="./img/err1.jpg" alt="" />
            </div>
            <div className='stock-box__item-bg'>
              <div className='stock-box__item-name'>РЮКЗАК "СМІЛИВІСТЬ"</div>
              <div className='stock-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='stock-box__item'>
            <div className='stock-box__item-picture'>
              <img className='stock-box__item-image' src="./img/err1.jpg" alt="" />
            </div>
            <div className='stock-box__item-bg'>
              <div className='stock-box__item-name'>РЮКЗАК "СМІЛИВІСТЬ"</div>
              <div className='stock-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='stock-box__item'>
            <div className='stock-box__item-picture'>
              <img className='stock-box__item-image' src="./img/err1.jpg" alt="" />
            </div>
            <div className='stock-box__item-bg'>
              <div className='stock-box__item-name'>РЮКЗАК "СМІЛИВІСТЬ"</div>
              <div className='stock-box__item-price'>1099 грн</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
