import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='about'>
      <h2 className='about-title'>ПРО НАС</h2>
      <div className='about-wripper container'>
        <div className='about-text'>
          <span>СПЕЦВІК</span> — МАГАЗИН СПЕЦОДЯГУ ТА ІНШОГО ЕКІПІРУВАННЯ.<br /><br />
          Наша компанія заснована в 1998 році, зарекомендувала себе на ринку. Динамічно розвивається і відкрита для споживачів. Компанія має у своєму розпорядженні різноманітні засоби індивідуального захисту і рада запропонувати споживачам України такі вироби як спецодяг, спецвзуття, уніформа та інші не менш важливі товари як вогнегасники, пожежні рукави та пожежний інвентар.<br /><br />
          Робочий одяг представлений у наших каталогах, відповідає вимогам гігієни, зручності, елегантності та стійкості до багаторазового прання. Увесь спецодяг пройшов контроль якості, відповідає сертифікатам та Державним стандартам.<br /><br />
          Наш персонал завжди готовий надати допомогу у підборі продукції, кваліфіковано відповісти на численні запитання клієнтів, дати поради та рекомендації.
        </div>
        <div className='about-picture'>
          <img className='about-image' src="../img/about-spetsvik.png" alt="" />
        </div>
      </div>
    </div>
  );
}
