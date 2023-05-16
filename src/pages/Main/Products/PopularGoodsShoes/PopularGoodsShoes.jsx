import React from 'react';
import './PopularGoodsShoes.css';

export default function PopularGoodsShoes() {

  return (
    <div className='popularGoods'>
      <div className='popularGoods-container container'>
        <h3 className='popularGoods-secondaryTitle'>Популярні товари</h3>

        <div className='popularGoods-box'>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/militaryShoes.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВЗУТТЯ "ВЗУТТЯ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/spetsShoes.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВЗУТТЯ "ВЗУТТЯ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/militaryShoes.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВЗУТТЯ "ВЗУТТЯ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>

          <div className='popularGoods-box__item'>
            <div className='popularGoods-box__item-picture'>
              <img className='popularGoods-box__item-image' src="./img/spetsShoes.jpg" alt="" />
            </div>
            <div className='popularGoods-box__item-bg'>
              <div className='popularGoods-box__item-name'>ВЗУТТЯ "ВЗУТТЯ"</div>
              <div className='popularGoods-box__item-price'>1099 грн</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
