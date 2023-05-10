import React, { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel() {

  const images = ['./img/backpack.jpg', './img/blanket.png', './img/body-armor.jpeg', './img/compass.png', './img/fire-extinguisher.png', './img/flashlight.jpeg', './img/jackets.jpg' ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === 'left'
        ? (currentImageIndex + images.length - 1) % images.length
        : (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const phone = localStorage.getItem("phone");
  console.log(phone);

  return (
    <>
      <div className='image-carousel'>
        <div className='image-carousel__arrow'>
          <div className='image-carousel__arrow-picture' onClick={() => handleArrowClick('left')}>
            <img className='image-carousel__arrow-img' src="./img/arrow-left.svg" alt="" />
          </div>
          <div className='image-carousel__arrow-picture' onClick={() => handleArrowClick('right')}>
            <img className='image-carousel__arrow-img' src="./img/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>

      <div className='image-carousel__picture'>
        <img className='image-carousel__img' src={images[currentImageIndex]} alt="" />
      </div>

      <div className='image-carousel__bg'></div>

      <div className='image-carousel__contact'>
        <div className='image-carousel__address'>вул. Поштова 139</div>
        <div className='image-carousel__telephone'>067 613 28 01</div>
      </div>
    </>
  );
}
