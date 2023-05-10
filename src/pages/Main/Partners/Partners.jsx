import React from 'react';
import './Partners.css';

export default function Partners() {
  // const [index, setIndex] = useState(0);
  const partners = [
    {
      image: './img/brand1.png'
    },
    {
      image: './img/brand2.png'
    },
    {
      image: './img/brand3.png'
    },
    {
      image: './img/brand4.png'
    },
    {
      image: './img/brand5.png'
    },
  ];

  // const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   const newIntervalId = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex === partners.length - 1 ? 0 : prevIndex + 1));
  //   }, 3000);
  //   setIntervalId(newIntervalId);
  //   return () => clearInterval(newIntervalId);
  // }, [partners.length]);

  // const handleClickLeft = () => {
  //   const newIndex = index === 0 ? partners.length - 1 : index - 1;
  //   setIndex(newIndex);
  //   clearInterval(intervalId);
  //   setIntervalId(null);
  // };

  // const handleClickRight = () => {
  //   const newIndex = index === partners.length - 1 ? 0 : index + 1;
  //   setIndex(newIndex);
  //   clearInterval(intervalId);
  //   setIntervalId(null);
  // };

  // const newPartners = [...partners.slice(index, partners.length), ...partners.slice(0, index)];

  return (
    <div className='partners'>
      <div className='partners-container container'>
        <h3 className='partners-title'>НАШІ ПАРТНЕРИ</h3>

        <div className='partners-wrapper'>
          {/* <div className='news-arrow__picture' onClick={handleClickLeft}>
          <img className='news-arrow__img' src="./img/arrow-left.svg" alt="" />
        </div> */}
          <div className='partners-map'>
            {partners.map((item, index) => (
              <div key={index} className='partners-map__item'>
                <div className='partners-map__item-picture'>
                  <img className='partners-map__item-image' src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          {/* <div className='news-arrow__picture' onClick={handleClickRight}>
          <img className='news-arrow__img' src="./img/arrow-right.svg" alt="" />
        </div> */}
        </div>
      </div>
    </div>
  );
}
