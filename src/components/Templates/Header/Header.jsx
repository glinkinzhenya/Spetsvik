import React from 'react';
import './Header.css';

export default function Header() {


  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <div className='header-language__active'>UA</div>
            <div className='header-language__en' >EN</div>
          </div>
          <div className='header-logo__telephone-picture'>
            <img className='header-logo__telephone-image' src="./img/logo-telephone.svg" alt="logo-telephone" />
          </div>
          <div>
            <select>
              <option value="option1">м. Запоріжжя, бульвар Шевченка, 16</option>
              <option value="option2">м. Запоріжжя, вул. Поштова, 141е</option>
              <option value="option3">м. Запоріжжя, бульвар Шевченка, 16</option>
            </select>
          </div>
        </div>
        <div className='header-logo__picture'>
          <img className='header-logo__image' src="./img/logo-spetsvik.svg" alt="logo-spetsvik" />
        </div>
        <div className='header-logo__burger'>
          <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-search.svg" alt="logo-telephone" />
          </div>
          <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-basket.svg" alt="logo-telephone" />
          </div>
          <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-telephone.svg" alt="logo-telephone" />
          </div>
        </div>
      </div>
      <nav className='header-category'>
        <div>СПЕЦОДЯГ</div>
        <div>ПОЖЕЖНА ПРОДУКЦІЯ</div>
        <div>ВІЙСЬКОВА</div>
        <div>ТКАНИНИ</div>
        <div>ПОЛЮВАННЯ ТА ПРИГОДИ</div>
      </nav>
    </div>
  );
}
