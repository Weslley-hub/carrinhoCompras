import React from 'react';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import logo from '../../public/logo/logo4.png';
import './Header.css';

const Header = ({ mostrarOuEsconderCarrinho, carrinho}) => {

  const calcularItensNoCarrinho = (carrinhoItens) => {
    var total = 0;
    for (let i = 0; i < carrinhoItens.length; i++) {
      total += carrinhoItens[i].quantidade;
      console.log("valor individual",carrinhoItens[i].quantidade);
    }
    console.log(total);
    return total;
  }

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
        <span className="cart-count">{calcularItensNoCarrinho(carrinho)}</span>
      </div>
    </header>
  );
};

export default Header;


  