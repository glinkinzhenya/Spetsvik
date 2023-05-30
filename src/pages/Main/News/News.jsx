import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import './News.css';
import { useMediaQuery } from '@mui/material';

export default function News() {
  const { mainData } = useContext(Context);
  const [mainData2, setMainData] = useState([]);
  const [index, setIndex] = useState(0);

  console.log(mainData2);

  useEffect(() => {
    if (mainData) {
      setMainData(mainData[0].news);
    }
  }, [mainData]);

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
  // 1200px
  //  992px
  //  768px
  //  576.8px

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
                ))
              }
          </div>
          <div className='news-arrow__picture' onClick={handleClickRight}>
            <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
