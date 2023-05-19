import React, { useContext } from 'react';
import { Context } from '../../../Contex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCarousel.css';

export default function ImageCarousel() {

  const { mainData } = useContext(Context);

  console.log(mainData);



  const images = [
    {
      image: './img/backpack.jpg',
      title: 'Заголовок 1',
      description: 'якийсь текст'
    },
    {
      image: './img/blanket.png',
      title: 'Заголовок 2',
      description: 'якийсь текст'
    },
    {
      image: './img/body-armor.jpg',
      title: 'Заголовок 3',
      description: 'якийсь текст'
    },
    {
      image: './img/compass.png',
      title: 'Заголовок 4',
      description: 'якийсь текст'
    },
    {
      image: './img/fire-extinguisher.png',
      title: 'Заголовок 5',
      description: 'якийсь текст'
    },
    {
      image: './img/flashlight.jpeg',
      title: 'Заголовок 6',
      description: 'якийсь текст'
    },
    {
      image: './img/jackets.jpg',
      title: 'Заголовок 7',
      description: 'якийсь текст'
    },
  ];


  return (
    <div className='imageCarouselCopy'>
      <div className='image-carousel__bootstrap'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">


            {images.map((item, index) => (
              (index === 0) ? <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                : <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={index + 1}></button>
            ))}

          </div>
          <div className="carousel-inner">

            {images.map((item, index) => (
              (index === 0) ?
                <div key={index} className="carousel-item active image-carousel__picture">
                  <img src={item.image} className="d-block image-carousel__img" alt="..." />
                  {/* <div className="carousel-caption d-none d-md-block">
                    <h5 className='carousel-item__title'>{item.title}</h5>
                    <p className='carousel-item__description'>{item.description}</p>
                  </div> */}
                </div> :
                <div key={index} className={`carousel-item image-carousel__picture`}
                >
                  <img src={item.image} className="d-block image-carousel__img" alt="..." />
                  {/* <div className="carousel-caption d-none d-md-block">
                    <h5 className='carousel-item__title'>{item.title}</h5>
                    <p className='carousel-item__description'>{item.description}</p>
                  </div> */}
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