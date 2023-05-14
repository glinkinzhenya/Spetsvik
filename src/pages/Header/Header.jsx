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

  const [isPulseButtonActive, setIsPulseButtonActive] = useState(false);

  const handlePulseButtonClick = () => {
    setIsPulseButtonActive(!isPulseButtonActive);
  };

  const pulseButtonImageClasses = `pulse-button-image ${isPulseButtonActive ? 'rotate opacity-image' : ''}`;
  const pulseButtonImage2Classes = `pulse-button-image2 ${isPulseButtonActive ? '' : 'opacity-image rotate '}`;
  const pulseButtonIconClasses = `pulse-button-icon ${isPulseButtonActive ? '' : 'pulse-button-icon_bottom opacity-image'}`;
  const headerBlack = `header-black ${isPulseButtonActive ? 'header-black__active' : ''}`;

  return (
    <div className='header'>
      <div onClick={handlePulseButtonClick} className={headerBlack}></div>
      <div className='header-logo container'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <a className='header-language__active' href="">UA</a>
            <a className='header-language__en' href="">EN</a>
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
        <a className='header-category__item action' href="/">ГОЛОВНА</a>
        <a className='header-category__item' href="/spets-cloth">СПЕЦОДЯГ</a>
        <a className='header-category__item' href="/fire-safety">ПОЖЕЖНА ПРОДУКЦІЯ</a>
        <a className='header-category__item' href="/">ВІЙСЬКОВА ЕКІПІРОВКА</a>
        <a className='header-category__item' href="/">ТКАНИНИ</a>
        <a className='header-category__item' href="/">ПОЛЮВАННЯ ТА ПРИГОДИ</a>
        <a className='header-category__item' href="/services">ПОСЛУГИ</a>
      </nav>


      <div onClick={handlePulseButtonClick} className="pulse-button">
        <img className={pulseButtonImageClasses} src="./img/chat.png" alt="" />
        <img className={pulseButtonImage2Classes} src="./img/image-icon.png" alt="" />

        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
      </div>

      <div className={pulseButtonIconClasses}>
        <img className="pulse-button-icon_image" src="./img/instagram-color.png" alt="" />
        <img className="pulse-button-icon_image" src="./img/telegram-color.svg" alt="" />
        <img className="pulse-button-icon_image" src="./img/viber-color.svg" alt="" />
      </div>

    </div>
  );
}
