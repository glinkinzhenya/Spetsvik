import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCarouselCopy.css';

export default function ImageCarouselCopy() {

  const images = ['./img/backpack.jpg', './img/blanket.png', './img/body-armor.jpg', './img/compass.png', './img/fire-extinguisher.png', './img/flashlight.jpeg', './img/jackets.jpg'];

  return (
    <div className='imageCarouselCopy'>
      <div className='image-carousel__bootstrap'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">


            {images.map((image, index) => (
              (index === 0) ? <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                : <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={index + 1}></button>
            ))}

          </div>
          <div className="carousel-inner">

            {images.map((image, index) => (
              (index === 0) ?
                <div key={index} className="carousel-item active image-carousel__picture">
                  <img src={image} className="d-block image-carousel__img" alt="..." />
                </div> :
                <div key={index} className={`carousel-item image-carousel__picture`}
                >
                  <img src={image} className="d-block image-carousel__img" alt="..." />
                </div>

            ))}

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='image-carousel__bg'></div>
    </div>
  );
}
