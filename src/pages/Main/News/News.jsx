import React, { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Context } from '../../../Contex';
import './News.css';

export default function News() {
  const { mainData } = useContext(Context);
  const [mainData2, setMainData] = useState([]);
  const [index, setIndex] = useState(0);

  const loadImage = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.src = src;
  });

  useEffect(() => {
    if (mainData) {
      setMainData(mainData[0].news);
      setIndex(0);
    }
  }, [mainData]);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(mainData2.map((item) => loadImage(item)));
    };

    loadImages();
  }, [mainData2]);

  const handleClickLeft = () => {
    const newIndex = index === 0 ? mainData2.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleClickRight = () => {
    const newIndex = index === mainData2.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const newNews = [...mainData2.slice(index, mainData2.length), ...mainData2.slice(0, index)];

  const Screen768 = useMediaQuery('(min-width:768px)');

  return (
    <div className='news-bg'>
      <div className='news'>
        <h3 className='news-title'>НОВИНИ ТА <span>АКЦІЇ</span></h3>
        <div className='news-wrapper'>
          <div className='news-arrow__picture' onClick={handleClickLeft}>
            <img className='news-arrow__img' src="./img/arrow-left.svg" alt="" />
          </div>
          <div className='news-map'>
            {Screen768
              ? newNews.slice(0, 4).map((item, index) => (
                <div key={index} className='news-map__item-picture'>
                  <img className='news-map__item-image' src={item} alt="" />
                </div>
              ))
              : newNews.slice(0, 2).map((item, index) => (
                <div key={index} className='news-map__item-picture'>
                  <img className='news-map__item-image' src={item} alt="" />
                </div>
              ))}
          </div>
          <div className='news-arrow__picture' onClick={handleClickRight}>
            <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
