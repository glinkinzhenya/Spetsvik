import React from 'react';
import './MilitaryEquipment.css';
import News from '../../News/News';

export default function MilitaryEquipment() {

  return (
    <>
      <div className='militaryEquipment'>
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
            <a className='boxPath-container__text' href="/military-equipment">Військова екіпіровка</a>
          </div>

        </div>
        <div className='militaryEquipment-container container'>
          <h2 className='militaryEquipment-mainTitle'>ВІЙСЬКОВА ЕКІПІРОВКА</h2>
        </div>

        <div className='militaryEquipment-baner'>
          <img className='militaryEquipment-baner__image' src="./img/MilitaryEquipment9.png" alt="" />
          {/* <img className='militaryEquipment-baner__image' src="./img/military-equipment-main.png" alt="" /> */}
        </div>

        <div className='militaryEquipment-container container'>
          <h3 className='militaryEquipment-secondaryTitle'>Основні категорії</h3>

          <div className='militaryEquipment-box'>

            <a className='militaryEquipment-box__item' href="/sets-of-uniforms">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment4.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>КОМПЛЕКТИ УНІФОРМИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/jackets-parks">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment5.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>КУРТКИ, ПАРКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/camouflage-clothing">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment6.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>МАСКУВАЛЬНИЙ ОДЯГ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/raincoats">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment1.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ДОЩОВИКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/poncho">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment13.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ПОНЧО</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/vests">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment2.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ЖИЛЕТИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/thermal-underwear">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment21.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ТЕРМОБІЛИЗНА</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/sweaters-fleeces">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment18.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>СВЕТРИ, ФЛІСИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/shirts-coats">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment20.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>СОРОЧКИ, КІТЕЛІ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/shirts">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment22.jpg" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ФУТБОЛКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/scarf-pipes">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment23.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ШАРФ-ТРУБИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/socks">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment24.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ШКАРПЕТКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/gloves">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment16.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>РУКАВИЦІ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/panami">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment10.jpg" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ПАНАМИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/military-footwear">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment19.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ВІЙСЬКОВЕ ВЗУТТЯ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/glasses">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment9.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ОКУЛЯРИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/thigh-platforms">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment7.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>НАБЕДРЕНІ ПЛАТФОРМИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/knee-pads-and-elbow-pads">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment8.jpg" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>НАКОЛІННИКИ ТА НАЛОКІТНИКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/belts-braces">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment14.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>РЕМЕНІ, ПІДТЯЖКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/backpacks-bags-trunks">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment17.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>РЮКЗАКИ, СУМКИ, БАУЛИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/pouches">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment11.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ПІДСУМКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/plate-carriers">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment12.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ПЛИТОНОСКИ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/weapon-belts">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment3.png" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>ЗБРОЙОВІ РЕМЕНІ</div>
              </div>
            </a>

            <a className='militaryEquipment-box__item' href="/unloading-systems">
              <div className='militaryEquipment-box__item-picture'>
                <img className='militaryEquipment-box__item-image' src="./img/MilitaryEquipment15.JPG" alt="" />
              </div>
              <div className='militaryEquipment-box__item-bg'>
                <div className='militaryEquipment-box__item-text'>РОЗВАНТАЖУВАЛЬНІ СИСТЕМИ</div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <News />
    </>
  );
}
