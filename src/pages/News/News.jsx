import React from 'react';
import './News.css';

export default function News() {

  return (
    <>
      <div className='news-bg'>
        <div className='news-container'>
          <h3 className='news-title'>НОВИНИ ТА <span>АКЦІЇ</span></h3>

          <div className='news-wrapper'>
            <div className='news-arrow__picture'>
              <img className='news-arrow__img' src="./img/arrow-left.svg" alt="" />
            </div>

            <div className='news-map'>

              <div className='news-map__item'>
                <div>Ціна тижня Берці</div>
              </div>
              <div className='news-map__item'>
                <div>Ціна тижня Берці</div>
              </div>
              <div className='news-map__item'>
                <div>Ціна тижня Берці</div>
              </div>
              <div className='news-map__item'>
                <div>Ціна тижня Берці</div>
              </div>

            </div>

            <div className='news-arrow__picture'>
              <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
            </div>

          </div>
        </div>



      </div >

    </>
  );
}
