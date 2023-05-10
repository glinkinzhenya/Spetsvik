import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer container'>
        <div className='footer-left'>
          <div className='footer-left__picture'>
            <img className='footer-left__image' src="" alt="" />
          </div>
          <div className='footer-left__text'>Спецвік - магазин спецодягу та іншого екіпірування</div>
        </div>
        <div className='footer-catalog'></div>
        <div className='footer-info'></div>
        <div className='footer-right'></div>

      </div>

      <div>
        <a href='https://www.instagram.com'>
          <img className='social' src='./img/instagram.png' alt='' />
        </a>
        <a href='https://www.facebook.com'>
          <img className='social' src='./img/facebook.png' alt='' />
        </a>
        <a href='https://web.telegram.org/z/'>
          <img className='social' src='./img/telegram.png' alt='' />
        </a>
      </div>
      <CallBack />
    </footer>
  );
}
