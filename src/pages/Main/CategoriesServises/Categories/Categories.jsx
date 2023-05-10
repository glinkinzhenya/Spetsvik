import React from 'react';
import './Categories.css';

export default function Categories() {

  return (
    <div className='categories'>
      <div className='categories-overalls'>
        <div className='categories-overalls__bg'>
          <div className='categories-overalls__text'>СПЕЦОДЯГ</div>
        </div>
      </div>
      <div className='categories-box'>
        <div className='categories-box__item'>
          <div className='categories-box__item-bg'>
            <div className='categories-box__item-text'>ПОЖЕЖНА ПРОДУКЦІЯ</div>
          </div>
        </div>
        <div className='categories-box__item'>
          <div className='categories-box__item-bg'>
            <div className='categories-box__item-text'>ВІЙСЬКОВА ЕКІПІРОВКА</div>
          </div>
        </div>
        <div className='categories-box__item'>
          <div className='categories-box__item-bg'>
            <div className='categories-box__item-text'>ТКАНИНИ</div>
          </div>
        </div>
        <div className='categories-box__item'>
          <div className='categories-box__item-bg'>
            <div className='categories-box__item-text'>ПОЛЮВАННЯ ТА ПРИГОДИ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
