import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

export default function ImageCarousel() {

  const images = ['./img/backpack.jpg', './img/blanket.png', './img/body-armor.jpeg', './img/compass.png', './img/fire-extinguisher.png', './img/flashlight.jpeg', './img/jackets.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleArrowClick = (direction) => {
    setIsTimerActive(false);
    const newIndex =
      direction === 'left'
        ? (currentImageIndex + images.length - 1) % images.length
        : (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  });

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

      <div className='image-carousel__pagination'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-carousel__pagination-circle ${index === currentImageIndex ? 'image-carousel__pagination-circle--active' : ''}`}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsTimerActive(false);
            }}
          ></div>
        ))}
      </div>

      <div className='image-carousel__bg'></div>
    </>
  );
}
