import React from 'react';
import './CategoriesServises.css';

export default function CategoriesServises() {

  return (
    <div className='categoriesServises container'>

      <div className='categories'>



        <a className='categories-overalls' href="/spets-cloth">
          <div className='categories-overalls__bg'>
            <div className='categories-overalls__text'>СПЕЦОДЯГ</div>
          </div>
        </a>

        <div className='categories-box'>

          <a className='categories-box__item item' href="/fire-safety">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ПОЖЕЖНА ПРОДУКЦІЯ</div>
            </div>
          </a>

          <div className='categories-box__item item2'>
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ВІЙСЬКОВА ЕКІПІРОВКА</div>
            </div>
          </div>

          
          <a className='categories-box__item item3' href="/fabrics">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ТКАНИНИ</div>
            </div>
          </a>

          <div className='categories-box__item item4'>
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ПОЛЮВАННЯ ТА ПРИГОДИ</div>
            </div>
          </div>
        </div>
      </div>
      <a href="/services">
        <div className='servises'>
          <div className='servises-bg'>
            <div className='servises-text'>ПОСЛУГИ</div>
          </div>
        </div>
      </a>

    </div>
  );
}
