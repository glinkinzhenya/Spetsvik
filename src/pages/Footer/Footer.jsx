import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contacts" className='footer container'>
      <div className='footer-primary'>
        <div className='footer-left'>
          <div className='footer-left__picture'>
            <a href=""></a>
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
          <div className='footer-catalog__item'>
            <a href="/about">Про нас</a>
          </div>
          <div className='footer-catalog__item'>
            <a href="/trainers">Товари</a>
          </div>
          <div className='footer-catalog__item'>
            <a href="/services">Пошив спецодягу</a>
          </div>
          <div className='footer-catalog__item'>
            <a href="/news">Новини та акціі</a>
          </div>
          <div className='footer-catalog__item'>
            <a href="/contacts">Контакти</a>
          </div>
        </div>

        <div className='footer-right'>
          <div className='footer-right__title'>Адреси магазинів</div>
          <div className='footer-right__item'>
            <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/ci2DPZvv62PQytH9A">м. Запоріжжя вул. Поштова 141 Е</a>
            <a className='footer-right__item-telephone' href="tel:+380990001122">
              <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
              099 000 11 22</a>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/untzH82HCHdjzH4i7">м. Запоріжжя вул. Бульвар Шевченко 16</a>
              <a className='footer-right__item-telephone' href="tel:+380990001122">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="">м. Лазове (Харьківська область) вул. Богданівська 35
                (біля магазину СПАР)</a>
              <a className='footer-right__item-telephone' href="tel:+380990001122">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="">м. Харьків вул. Різдвяна, 21</a>
              <a className='footer-right__item-telephone' href="tel:+380990001122">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href=""> м. Городок (Хмельницька область) вул. Грушевського 84/2</a>
              <a className='footer-right__item-telephone' href="tel:+380990001122">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22</a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-secondary'>
        <div className='footer-secondary__social'>
          <a href='https://www.facebook.com'>
            <img className='footer-secondary__social-image' src='./img/facebook.png' alt='' />
          </a>
          <a href='https://www.instagram.com'>
            <img className='footer-secondary__social-image' src='./img/instagram.png' alt='' />
          </a>
        </div>

        <div className='footer-secondary__telephone'>
          {/* <a className='footer-secondary__telephone-link' href="">
          <img className='footer-secondary__telephone-image' src="./img/logo-telephone.svg" alt="" />
                099 000 11 22
          </a> */}
          <div className='footer-secondary__telephone-grafic'>Пн-Пт: 8:30 - 15:30</div>
          {/* <CallBack /> */}
        </div>

        <div className='footer-secondary__info'>© СПЕЦВІК – 2023.</div>


      </div>

    </footer>
  );
}
