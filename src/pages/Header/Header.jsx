import React, { useState } from 'react';
import './Header.css';
import Burger from './ComponentHeader/Burger';

export default function Header() {

  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedPhone, setSelectedPhone] = useState('');
  const addresses = [
    {
      address: 'м. Запоріжжя, бульвар Шевченка, 16',
      phone: '067 634 23 34'
    },
    {
      address: 'м. Запоріжжя, вул. Поштова, 141е',
      phone: '063 123 45 67'
    },
    {
      address: 'м. Запоріжжя, бульвар Шевченка, 78',
      phone: '066 987 65 43'
    }
  ];

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    const selectedPhone = addresses.find(a => a.address === selectedOption)?.phone || '';
    setSelectedAddress(selectedOption);
    setSelectedPhone(selectedPhone);
  };

  const defaultPhone = addresses[0].phone;

  return (
    <div className='header'>
      <div className='header-logo container'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <div className='header-language__active'>UA</div>
            <div className='header-language__en' >EN</div>
          </div>
          <div className='header-logo__telephone-picture'>
            <img className='header-logo__telephone-image' src="./img/logo-telephone.svg" alt="logo-telephone" />
          </div>
          <div className='header-logo__choice'>
            <div className='header-logo__choice-number'>{(selectedPhone) ? selectedPhone : defaultPhone}</div>
            <select className='header-logo__choice-select' onChange={handleSelectChange} value={selectedAddress}>
              {addresses.map(a => (
                <option className='header-logo__choice-option' key={a.address} value={a.address}>{a.address}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='header-logo__picture'>
          <a href="/">
            <img className='header-logo__image' src="./img/logo-spetsvik.svg" alt="logo-spetsvik" />
          </a>

        </div>
        <div className='header-logo__burger'>
          <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-search.svg" alt="logo-telephone" />
          </div>
          <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-basket.svg" alt="logo-telephone" />
          </div>
          <Burger />
        </div>
      </div>
      <nav className='header-category'>
        <a className='header-category__item' href="/">ГОЛОВНА</a>
        <a className='header-category__item' href="/">СПЕЦОДЯГ</a>
        <a className='header-category__item' href="/">ПОЖЕЖНА ПРОДУКЦІЯ</a>
        <a className='header-category__item' href="/">ВІЙСЬКОВА</a>
        <a className='header-category__item' href="/">ТКАНИНИ</a>
        <a className='header-category__item' href="/">ПОЛЮВАННЯ ТА ПРИГОДИ</a>
        <a className='header-category__item' href="/">ПОСЛУГИ</a>
      </nav>
    </div>
  );
}
