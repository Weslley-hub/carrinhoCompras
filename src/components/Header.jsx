import React from 'react';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import logo from '../../public/logo/logo4.png';
import './Header.css';

const Header = ({carrinhoItens, mostrarOuEsconderCarrinho}) => {

  return (
    <header className="header">
      <img src={logo} className='logo-img' alt='Logo'></img>
      <h1>King Burguer</h1>
      <div className="cart-icon">
        <button 
          style={{ 
            cursor: 'pointer',
            backgroundColor: "transparent",
            border: 0,
          }}
          onClick={() => {mostrarOuEsconderCarrinho()}}>
            <Icon path={mdiCart} size={1} />
        </button>
        <span className="cart-count">{carrinhoItens}</span>
      </div>
    </header>
  );
};

export default Header;


  