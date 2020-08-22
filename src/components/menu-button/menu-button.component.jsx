import React from 'react';
import './menu-button.styles.css';

const MenuButton = ({hidden}) => {
    return(
  <div 
  className={`MenuButtonContainer ${!hidden ? 'is-active' : ''}`}>
    <button className={`hamburger hamburger--3dy ${!hidden ? 'is-active' : ''}`} type="button">
      <span className="hamburger-box">
        <span className={`hamburger-inner`}></span>
      </span>
    </button>
  </div>
  )
}

export default MenuButton;