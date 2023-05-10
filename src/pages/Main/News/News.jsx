import React, { useState } from 'react';
import './News.css';

export default function News() {
  const [index, setIndex] = useState(0);
  const news = [
    {
      title: '1',
      description: 'frfrvfvffr',
      image: './img/blanket.png'
    },
    {
      title: '2',
      description: 'frvfvfrfr',
      image: './img/backpack.jpg'
    },
    {
      title: '3',
      description: 'frvfvffrfr',
      image: './img/compass.png'
    },
    {
      title: '4',
      description: 'frfrfvfr',
      image: './img/body-armor.jpeg'
    },
    {
      title: '5',
      description: 'frfrfvvfr',
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
