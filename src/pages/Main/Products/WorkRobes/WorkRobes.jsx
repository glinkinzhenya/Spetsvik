import React from 'react';
import './WorkRobes.css';

export default function WorkRobes() {

  return (
    <>
      <div className='workRobes'>
        <div className='boxPath'>
          <div className='boxPath-container container'>
            <a className='boxPath-container__text' href="/">Головна</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/products">Товари</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/spets-cloth">Спецодяг</a>
            <div className='boxPath-container__arrow'>
              <img className='boxPath-container__arrow-image' src="./img/arrow-right.svg" alt="" />
            </div>
            <a className='boxPath-container__text' href="/work-robes">Халати робочі</a>
          </div>
        </div>

        {/* <div className='workRobes-container container'>
          <h2 className='workRobes-mainTitle'>WorkRobes</h2>
        </div> */}

        {/* <div className='workRobes-baner'>
          <img className='workRobes-baner__image' src="./img/jackets.jpg" alt="" />
        </div> */}

        <div className='workRobes-container container'>
          <h3 className='workRobes-secondaryTitle'>Халати робочі</h3>

          <div className='workRobes-box'>
            <div className='workRobes-box__left'>ФИЛЬТРЫ</div>

            <div className='workRobes-box__right'>
              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>

              <div className='workRobes-box__right-item'>
                <div className='workRobes-box__right-picture'>
                  <img className='workRobes-box__right-image' src="./img/stock_portrait.jpeg" alt="" />
                </div>
                <div className='workRobes-box__right-name'>Халати робочі</div>
                <div className='workRobes-box__right-price'>999 грн</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
