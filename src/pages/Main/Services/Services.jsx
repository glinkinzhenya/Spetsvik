import React from 'react';
import './Services.css';
import CallBack from '../../../components/CallBack/CallBack';

export default function Services() {
  return (
    <div className='services'>
      <div className='services-container container'>
        <h2 className='services-title'>ПОСЛУГИ</h2>
        <div className='services-box'>
          <div className='services-box__text'>
            <h3 className='services-box__text-title'>ПОШИВ СПЕЦОДЯГУ</h3>
            <div className='services-box__text-description'>
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

            <div className='services-call__back'>
              <CallBack buttonText="ЗАМОВИТИ"
                dialogTitle="Введіть Ваш номер телефону та коментар"
                dialogText="Ми зателефонуємо як найшвідше та відповемо на всі ваші питання"
                confirmText="Надіслати"
                cancelText="Скасувати"
                from="звідки - 'Пошив спецодягу'"
                fontSize="18px" />
            </div>
          </div>
          <div className='services-box__picture'>
            <img className='services-box__image' src="../img/jackets.jpg" alt="" />
          </div>
        </div>

        <div className='services-box'>
          <div className='services-box__text'>
            <h3 className='services-box__text-title'>НАНЕСЕННЯ ЛОГОТИПІВ</h3>
            <div className='services-box__text-description'>
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

            <div className='services-call__back'>
              <CallBack
                buttonText="ЗАМОВИТИ"
                dialogTitle="Введіть Ваш номер телефону та коментар"
                dialogText="Ми зателефонуємо як найшвідше та відповемо на всі ваші питання"
                confirmText="Надіслати"
                cancelText="Скасувати"
                from="звідки - 'Нанесення логотипів'"
                fontSize="18px" />
            </div>
          </div>
          <div className='services-box__picture--md'>
            <img className='services-box__image--md' src="../img/services-logo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
