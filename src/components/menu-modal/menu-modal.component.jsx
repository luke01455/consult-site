import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './menu-modal.styles.scss';

const MenuModal = ({hidden}) => {

  const node = useRef();

const menuModalToggle = () => {
    hidden = !hidden
}


  return (
    <div ref={node} className={`styled-menu ${hidden ? 'closed-menu' : 'open'}`}>
      <div className='menu-title-container'>
        <h1 className='menu-title'> CONSULT NAME </h1>
      </div>
      <div className='a-container'>
        <Link className="menu-link" onClick={() => menuModalToggle()} to="/services">
          Services
        </Link>
        <Link className="menu-link" onClick={() => menuModalToggle()} to="/cases">
          Cases
        </Link>
        <Link className="menu-link" onClick={() => menuModalToggle()} to="blog">
          Squad
        </Link>
        <Link className="menu-link" onClick={() => menuModalToggle()} to="/squad">
          Blog
        </Link>
        <Link className="menu-link" onClick={() => menuModalToggle()} to="/contact">
          Contact
        </Link>
      </div>

    </div>
  )
}

export default MenuModal;