import React from 'react';
import './Partners.css';

export default function Partners() {
  const partners = [
    {
      image: './img/brand1.png',
    },
    {
      image: './img/brand2.png',
    },
    {
      image: './img/brand3.png',
    },
    {
      image: './img/brand4.png',
    },
    {
      image: './img/brand5.png',
    },
    {
      image: './img/brand6.png',
    },
  ];

  return (
    <div className='partners'>
      <div className='partners-container container'>
        <h3 className='partners-title'>НАШІ ПАРТНЕРИ</h3>

        <div className='wrapper'>
          <div className='wrapper-all'>
            <span className='partners-map'>
              {partners.map((item, index) => (
                <div key={index} className='partners-map__item-picture'>
                  <img className='partners-map__item-image' src={item.image} alt='' />
                </div>
              ))}
            </span>
            <span className='partners-map'>
              {partners.map((item, index) => (
                <div key={index} className='partners-map__item-picture'>
                  <img className='partners-map__item-image' src={item.image} alt='' />
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
