import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contacts" className='footer container'>
      <div className='footer-primary'>
        <div className='footer-left'>
          <div className='footer-left__picture'>
            <a href="/">
              <img className='footer-left__image' src="./img/logo-spetsvik.svg" alt="" />
            </a>
          </div>
          <div className='footer-left__text'>Спецвік - магазин спецодягу та іншого екіпірування</div>
        </div>
        <div className='footer-catalog'>
          <div className='footer-catalog__title'>Каталог</div>
          <a className='footer-catalog__item' href="">Спецодяг</a>
          <a className='footer-catalog__item' href="">Тканини</a>
          <a className='footer-catalog__item' href="/fire-safety">Пожежна продукція</a>
          <a className='footer-catalog__item' href="">Військове екіпірування</a>
          <a className='footer-catalog__item' href="">Полювання та пригоди</a>
          <a className='footer-catalog__item' href="/services">Послуги</a>
        </div>

        <div className='footer-info'>
          <div className='footer-info__title'>Інфо</div>
          <a className='footer-info__item' href="/">Головна</a>
          <a className='footer-info__item' href="/about">Про нас</a>
          <a className='footer-info__item' href="/products">Товари</a>
          <a className='footer-info__item' href="/services">Пошив спецодягу</a>
          <a className='footer-info__item' href="/news">Новини та акціі</a>
          <a className='footer-info__item' href="/contacts">Контакти</a>
        </div>

        <div className='footer-right'>
          <div className='footer-right__title'>Адреси магазинів</div>
          <div className='footer-right__item'>
            <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/ci2DPZvv62PQytH9A">м. Запоріжжя, вул. Поштова 141-Е</a>
            <a className='footer-right__item-telephone' href="tel:+380676120366">
              <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
              067 612 03 66</a>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/untzH82HCHdjzH4i7">м. Запоріжжя, Бульвар Шевченка 16</a>
              <a className='footer-right__item-telephone' href="tel:+380981807080">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                098 180 70 80</a>
            </div>
          </div>

          <div className='footer-right'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/hT7zgvGWuNVq3gEY8">м. Лозова (Харківська область), вул. Богданівська 35
                (біля магазину СПАР)</a>
              <a className='footer-right__item-telephone' href="tel:+380676132880">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                067 613 28 80</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/3bmo4t72UDWPVEzW7">м. Харьків, вул. Різдвяна 21</a>
              <a className='footer-right__item-telephone' href="tel:+380676121958">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                067 612 19 58</a>
            </div>
          </div>

          <div className='footer-right__item'>
            <div className='footer-right__item'>
              <a className='footer-right__item-address' target='_blank' href="https://goo.gl/maps/pmMV6SjztNN585nq9">м. Городок (Хмельницька область), вул. Грушевського 84/2</a>
              <a className='footer-right__item-telephone' href="tel:+380974058748">
                <img className='footer-right__item-image' src="./img/logo-telephone.svg" alt="" />
                098 405 87 48</a>
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
          <div className='footer-secondary__telephone-grafic'>Ми працюємо: Пн-Пт: 8:30-15:30</div>
          {/* <CallBack /> */}
        </div>

        <div className='footer-secondary__info'>© СПЕЦВІК – 2023.</div>


      </div>

    </footer>
  );
}
