import React, { useState } from 'react';
import './Pulse.css';

export default function Pulse() {
  const [isPulseButtonActive, setIsPulseButtonActive] = useState(false);

  const handlePulseButtonClick = () => {
    setIsPulseButtonActive(!isPulseButtonActive);
    document.body.classList.toggle('body-fixed');
  };

  const pulseButtonImageClasses = `pulse-button-image ${isPulseButtonActive ? 'rotate opacity-image' : ''}`;
  const pulseButtonImage2Classes = `pulse-button-image2 ${isPulseButtonActive ? '' : 'opacity-image rotate '}`;
  const pulseButtonIconClasses = `pulse-button-icon ${isPulseButtonActive ? '' : 'pulse-button-icon_bottom opacity-image'}`;
  const pulseOpacity = `pulse-opacity ${isPulseButtonActive ? 'pulse-opacity__active' : ''}`;

  return (
    <div>
      <div onClick={handlePulseButtonClick} className={pulseOpacity}></div>
      <div onClick={handlePulseButtonClick} className="pulse-button">
        <img className={pulseButtonImageClasses} src="./img/chat.png" alt="" />
        <img className={pulseButtonImage2Classes} src="./img/image-icon.png" alt="" />

        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
      </div>

      <div className={pulseButtonIconClasses}>
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/instagram-color.png" alt="" />
        </a>
        {/* <a className="pulse-button-icon_link" href="https://t.me/Alexey_Omelianenko" target="_blank" rel="noreferrer"> */}
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/telegram-color.svg" alt="" />
        </a>
        {/* <a className="pulse-button-icon_link" href="viber://add?number=380505258880" target="_blank" rel="noreferrer"> */}
        <a className="pulse-button-icon_link" href="https://www.instagram.com/work.vik" target="_blank" rel="noreferrer">
          <img className="pulse-button-icon_image" src="./img/viber-color.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
