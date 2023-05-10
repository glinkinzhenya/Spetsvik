import React from 'react';
import './Partners.css';

export default function Partners() {

  return (
    <div className='partners'>
      <h3 className='partners-title'>НАШІ ПАРТНЕРИ</h3>

      <div className='partners-wrapper'>
        <div className='news-arrow__picture'>
          <img className='news-arrow__img' src="./img/arrow-left.svg" alt="" />
        </div>

        <div className='partners-map'>
          <div className='partners-map__item'></div>
          <div className='partners-map__item'></div>
          <div className='partners-map__item'></div>
          <div className='partners-map__item'></div>
        </div>

        <div className='news-arrow__picture'>
          <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
