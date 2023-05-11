import React from 'react';
import './Services.css';

export default function Services() {

  return (
    <div className='services'>
      <div className='services-container container'>
        <h2 className='services-title'>ПОСЛУГИ</h2>
        <div className='services-wripper'>
          <div className='services-text'>
            <h3 className='services-text__title'>ПОШИВ СПЕЦОДЯГУ</h3>
            <div className='services-text__description'>
              СПЕЦВІК пропонує свої послуги з пошиття спецодягу на
              давальницькій основі (з матеріалів замовника). На
              сьогоднішній день виробничі потужності підприємства
              оснащені сучасним обладнанням (швейні машини Siruba,
              СОТ, карусельний верстат для нанесення логотипів тощо),
              до складу фабрик входять підготовчі, розкрійні,
              експериментальні та виробничі цехи, а також складський
              комплекс.
            </div>

            <div className='services-text__description'>
              Наші професіонали – конструктор та технолог допоможуть
              Вам втілити в реальність усі Ваші моделі будь-якої
              складності!
            </div>

            <button></button>

          </div>
          <div className='about-picture'>
            <img className='about-image' src="../img/about-spetsvik.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
