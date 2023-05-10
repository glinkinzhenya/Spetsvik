import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer container'>
      <div className='footer-primary'>
        <div className='footer-left'>
          <div className='footer-left__picture'>
            <img className='footer-left__image' src="./img/logo-spetsvik.svg" alt="" />
          </div>
          <div className='footer-left__text'>Спецвік - магазин спецодягу та іншого екіпірування</div>
        </div>
        <div className='footer-catalog'>
          <div className='footer-catalog__title'>Каталог</div>
          <div className='footer-catalog__item'>Спецодяг</div>
          <div className='footer-catalog__item'>Тканини</div>
          <div className='footer-catalog__item'>Пожежна продукція</div>
          <div className='footer-catalog__item'>Військове екіпірування</div>
          <div className='footer-catalog__item'>Полювання та пригоди</div>
        </div>
        <div className='footer-info'>
          <div className='footer-info__title'>Інфо</div>
          <div className='footer-catalog__item'>Про нас</div>
          <div className='footer-catalog__item'>Товари</div>
          <div className='footer-catalog__item'>Пошив спецодягу</div>
          <div className='footer-catalog__item'>Новини та акціі</div>
          <div className='footer-catalog__item'>Контакти</div>
        </div>

        <div className='footer-right'>
          <div className='footer-right__title'>Адреси магазинів</div>
          <div className='footer-right__item'>
            <a className='footer-right__item-address' href="">м. Запоріжжя вул. Поштова 141 Е</a>
            <a className='footer-right__item-telephone' href="">
              <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
              099 000 11 22</a>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' href="">м. Запоріжжя вул. Бульвар Шевченко 16</a>
              <a className='footer-right__item-telephone' href="">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' href="">м. Лазове (Харьківська область) вул. Богданівська 35
                (біля магазину СПАР)</a>
              <a className='footer-right__item-telephone' href="">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' href="">м. Харьків вул. Різдвяна, 21</a>
              <a className='footer-right__item-telephone' href="">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' href=""> м. Городок (Хмельнцицька область) вул. Грушевського 84/2</a>
              <a className='footer-right__item-telephone' href="">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-secondary'>
        <div className='footer-secondary__social'>
          <a href='https://www.instagram.com'>
            <img className='footer-secondary__social-image' src='./img/logo-telephone.svg' alt='' />
          </a>
          <a href='https://www.facebook.com'>
            <img className='footer-secondary__social-image' src='./img/logo-telephone.svg' alt='' />
          </a>
          <a href='https://web.telegram.org/z/'>
            <img className='footer-secondary__social-image' src='./img/logo-telephone.svg' alt='' />
          </a>
        </div>

        <div className='footer-secondary__telephone'>
          <a className='footer-secondary__telephone-link' href="">
          <img className='footer-secondary__telephone-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22
          </a>
          <div className='footer-secondary__telephone-grafic'>Пн-Пт: 8:30 - 15:30</div>
          {/* <CallBack /> */}
        </div>

        <div className='footer-secondary__info'>© СПЕЦВІК – 2023.</div>


      </div>

    </footer>
  );
}
