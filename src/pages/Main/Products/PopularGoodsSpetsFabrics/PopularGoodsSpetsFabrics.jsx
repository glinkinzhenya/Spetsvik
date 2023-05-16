import React from 'react';
import './PopularGoodsSpetsFabrics.css';

export default function PopularGoodsSpetsFabrics() {

  return (
    <div className='popularGoods'>
      <div className='popularGoods-container container'>
        <h3 className='popularGoods-secondaryTitle'>Популярні товари</h3>

        <div className='popularGoods-box'>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fabrics.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ТКАНИНА "ТКАНИНА"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fabrics1.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ТКАНИНА "ТКАНИНА"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fabrics.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ТКАНИНА "ТКАНИНА"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/fabrics1.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ТКАНИНА "ТКАНИНА"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
