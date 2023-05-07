import React from 'react';
import './Header.css';

export default function Header() {


  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <div>UA</div>
            <div>EN</div>
          </div>
          <div className='header-logo__telephone-picture'>
            <img className='header-logo__telephone-image' src="./img/logo-telephone.svg" alt="logo-telephone" />
          </div>
          <div>
            <select>
              <option className='header-logo__option' value="option1">067 613 28 81</option>
              <option value="option2">067 613 28 82</option>
              <option value="option3">067 613 28 83</option>
              <option value="option4">067 613 28 84</option>
              <option value="option5">067 613 28 85</option>
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
        <div>Спецодяг</div>
        <div>Пожежна продукція</div>
        <div>Війскова екіпіровка</div>
        <div>Тканини</div>
        <div>Полювання та прігоди</div>
      </nav>
    </div>
  );
}
