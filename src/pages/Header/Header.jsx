import React, { useState } from 'react';
import './Header.css';
import Burger from './ComponentHeader/Burger/Burger';
import BasicMenu from './ComponentHeader/BasicMenu/BasicMenu';

export default function Header() {

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

      <div className='header-contacts container'>
        <BasicMenu
          city="м. Запоріжжя"
          addresses={[
            { label: 'вул. Поштова 141-Е', url: 'https://goo.gl/maps/ci2DPZvv62PQytH9A' },
            { label: 'Бульвар Шевченка 16', url: 'https://goo.gl/maps/untzH82HCHdjzH4i7' },
          ]}
          phoneNumbers={['+380676120366', '+380981807080']}
        />
        <BasicMenu
          city="м. Лозова"
          addresses={[
            { label: 'вул. Богданівська 35', url: 'https://goo.gl/maps/hT7zgvGWuNVq3gEY8' }
          ]}
          phoneNumbers={['+380676132880']}
        />
        <BasicMenu
          city="м. Харків"
          addresses={[
            { label: 'вул. Різдвяна 21', url: 'https://goo.gl/maps/3bmo4t72UDWPVEzW7' }
          ]}
          phoneNumbers={['+380676121958']}
        />
        <BasicMenu
          city="м. Городок"
          addresses={[
            { label: 'вул. Грушевського 84/2', url: 'https://goo.gl/maps/pmMV6SjztNN585nq9' }
          ]}
          phoneNumbers={['+380974058748']}
        />
      </div>

      <div className='header-logo container'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <a className='header-language__active' href="">UA</a>
            <a className='header-language__en' href="">EN</a>
            <a className='header-language__en' href="">DE</a>
          </div>

          {/* <div className='header-logo__telephone-picture'>
            <img className='header-logo__telephone-image' src="./img/logo-telephone.svg" alt="logo-telephone" />
          </div> */}
          {/* <div className='header-logo__choice'>

            <div className='header-logo__choice-number'>
              <a className='header-logo__choice-link' href={newDataNumber}>{(selectedPhone) ? selectedPhone : defaultPhone}</a>
            </div>
            <select className='header-logo__choice-select' onChange={handleSelectChange} value={selectedAddress}>
              {addresses.map(a => (
                <option className='header-logo__choice-option' key={a.address} value={a.address}>{a.address}</option>
              ))}
            </select>
          </div> */}
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
        {/* <a className='header-category__item action' href="/">ГОЛОВНА</a> */}
        <a className='header-category__item' href="/spets-cloth">СПЕЦОДЯГ</a>
        <a className='header-category__item' href="/shoes">ВЗУТТЯ</a>
        <a className='header-category__item' href="/fire-safety">ПОЖЕЖНА ПРОДУКЦІЯ</a>
        <a className='header-category__item' href="/">ВІЙСЬКОВА ЕКІПІРОВКА</a>
        <a className='header-category__item' href="/shevrons">ШЕВРОНИ</a>
        <a className='header-category__item' href="/fabrics">ТКАНИНИ</a>
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

    </div >
  );
}
