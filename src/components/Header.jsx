import React from 'react';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import logo from '../../public/logo/logo4.png';
import './Header.css';

const Header = ({carrinhoItens}) => {
  return (
    <header className="header">
      <img src={logo} className='logo-img' alt='Logo'></img>
      <h1>King Burguer</h1>
      <div className="cart-icon">
        <p><Icon path={mdiCart} size={1} /></p>
        <span className="cart-count">{carrinhoItens}</span>
      </div>
    </header>
  );
};

export default Header;


  