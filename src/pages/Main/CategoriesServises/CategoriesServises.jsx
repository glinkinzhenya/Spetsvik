import React from 'react';
import './CategoriesServises.css';

export default function CategoriesServises() {

  return (
      <div className='categoriesServises container'>

        <div className='categories'>
          <div className='categories-overalls'>
            <div className='categories-overalls__bg'>
              <div className='categories-overalls__text'>СПЕЦОДЯГ</div>
            </div>
          </div>
          <div className='categories-box'>
            <div className='categories-box__item item'>
              <div className='categories-box__item-bg'>
                <div className='categories-box__item-text'>ПОЖЕЖНА ПРОДУКЦІЯ</div>
              </div>
            </div>
            <div className='categories-box__item item2'>
              <div className='categories-box__item-bg'>
                <div className='categories-box__item-text'>ВІЙСЬКОВА ЕКІПІРОВКА</div>
              </div>
            </div>
            <div className='categories-box__item item3'>
              <div className='categories-box__item-bg'>
                <div className='categories-box__item-text'>ТКАНИНИ</div>
              </div>
            </div>
            <div className='categories-box__item item4'>
              <div className='categories-box__item-bg'>
                <div className='categories-box__item-text'>ПОЛЮВАННЯ ТА ПРИГОДИ</div>
              </div>
            </div>
          </div>
        </div>

        <div className='servises'>
          <div className='servises-bg'>
            <div className='servises-text'>ПОСЛУГИ</div>
          </div>
        </div>
    </div>
  );
}
