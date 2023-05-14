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
              комплекс.<br /><br />
              Наші професіонали – конструктор та технолог допоможуть
              Вам втілити в реальність усі Ваші моделі будь-якої
              складності!
            </div>

            <button className='services-button'>ЗАМОВИТИ</button>

          </div>
          <div className='services-picture'>
            <img className='services-image' src="../img/jackets.jpg" alt="" />
          </div>
        </div>

        <div className='services-wripper'>
          <div className='services-text'>
            <h3 className='services-text__title'>НАНЕСЕННЯ ЛОГОТИПІВ</h3>
            <div className='services-text__description'>
              СПЕЦВІК професійно наносить логотипи, малюнки та
              зображення за допомогою найсучасніших технологій у
              Києві, Харкові, Запоріжжі, Кривому Розі та інших містах
              України.<br />
              Нанесення логотипу, зображення на крої, на готовому
              одязі та спецодязі виконується такими способами:<br />
              - вишивка;<br />
              - шовкографія;<br />
              - трансфер (термодрук).<br /><br />
              Колірна гама та розмір нанесення підбирається за
              бажанням замовника.
            </div>

            <button className='services-button'>ЗАМОВИТИ</button>

          </div>
          <div className='services-picture services-picture--md'>
            <img className='services-image' src="../img/flagUA.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
