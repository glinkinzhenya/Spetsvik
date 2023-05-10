import React, { useState } from 'react';
import './News.css';

export default function News() {
  const [index, setIndex] = useState(0);
  const news = [
    {
      title: 'Ціна тижня Берці',
      description: '',
      image: './img/err1.png'
    },
    {
      title: 'Нова адреса',
      description: 'м. Харків вул. Різдвяна 21',
      image: './img/harkiv.jpg'
    },
    {
      title: 'Великий контрнаступ',
      description: 'Весняної колекції 2023',
      image: './img/zsu.png'
    },
    {
      title: 'Шеврони на замовлення',
      description: 'Реалізовуємо дудь-який принт',
      image: './img/body-armor.jpeg'
    },
    {
      title: 'Новина 5',
      description: 'Тут буде щось новеньке',
      image: './img/fire-extinguisher.png'
    },
  ];

  const handleClickLeft = () => {
    const newIndex = index === 0 ? news.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleClickRight = () => {
    const newIndex = index === news.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const newNews = [...news.slice(index, news.length), ...news.slice(0, index)];

  return (
    <div className='news-bg'>
      <div className='news'>
        <h3 className='news-title'>НОВИНИ ТА <span>АКЦІЇ</span></h3>

          <div className='news-wrapper'>
            <div className='news-arrow__picture' onClick={handleClickLeft}>
              <img className='news-arrow__img' src="./img/arrow-left.svg" alt="" />
            </div>

            <div className='news-map'>
              {newNews.slice(0, 4).map((item, index) => (
                <div key={index} className='news-map__item'>
                  <h4 className='news-map__item-title'>{item.title}</h4>
                  <p className='news-map__item-description'>{item.description}</p>
                  <div className='news-map__item-picture'>
                    <img className='news-map__item-image' src={item.image} alt="" />
                  </div>
                </div>
              ))}
            </div>

            <div className='news-arrow__picture' onClick={handleClickRight}>
              <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div >
  );
}
