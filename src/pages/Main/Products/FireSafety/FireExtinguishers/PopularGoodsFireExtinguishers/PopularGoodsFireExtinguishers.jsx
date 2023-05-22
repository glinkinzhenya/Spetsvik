import React from 'react';
import './PopularGoodsFireExtinguishers.css';

export default function PopularGoodsFireExtinguishers() {

  return (
    <div className='popularGoods'>
      <div className='popularGoods-container container'>
        <h3 className='popularGoods-secondaryTitle'>Популярні товари</h3>

        <div className='popularGoods-box'>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fire-main.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВОГНЕГАСНИК "ВОГНЕГАСНИК"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fire-main.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>РУКАВ "РУКАВ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fire-main.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВОГНЕГАСНИК "ВОГНЕГАСНИК"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fire-main.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>РУКАВ "РУКАВ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}