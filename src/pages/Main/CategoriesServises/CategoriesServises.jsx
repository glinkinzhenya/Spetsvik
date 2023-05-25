import React from 'react';
import './CategoriesServises.css';

export default function CategoriesServises() {

  return (
    <div className='categoriesServises container'>

      <div className='categories'>

        <div className='categories-box'>

          <a className='categories-overalls' href="/spets-cloth">
            <div className='categories-overalls__bg'>
              <div className='categories-overalls__text'>СПЕЦОДЯГ</div>
            </div>
          </a>

          <a className='categories-box__item item1' href="/fire-safety">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ПОЖЕЖНА ПРОДУКЦІЯ</div>
            </div>
          </a>

          <a className='categories-box__item item2' href="/military-equipment">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ВІЙСЬКОВА ЕКІПІРОВКА</div>
            </div>
          </a>

          <a className='categories-box__item item3' href="/fabrics">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ТКАНИНИ</div>
            </div>
          </a>

          <a className='categories-box__item item4' href="/">
            <div className='categories-box__item-bg'>
              <div className='categories-box__item-text'>ПОЛЮВАННЯ ТА ПРИГОДИ</div>
            </div>
          </a>

          <a className='servises servises1' href="/shoes">
            <div className='servises-bg'>
              <div className='servises-text'>ВЗУТТЯ</div>
            </div>
          </a>

          <a className='servises servises2' href="/shevrons">
            <div className='servises-bg'>
              <div className='servises-text'>ШЕВРОНИ</div>
            </div>
          </a>

          <a className='servises servises3' href="/services">
            <div className='servises-bg'>
              <div className='servises-text'>ПОСЛУГИ</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
