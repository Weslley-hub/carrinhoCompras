/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import './CardModal.css';

const CartModal = ({ carrinho, removerDoCarrinho, alterarQuantidade }) => {
  
  const calcularTotal = (carrinhoItens) => {
    return carrinhoItens.reduce((total, item) => total + item.valor * item.quantidade, 0);
  };

  return (
    <aside className="cart-sidebar">
      <div className="cart-items">
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item) => (
              <li key={item.id}>
                <div className="item-info">
                  <span>{item.nome}</span>
                  <span>R$ {item.valor.toFixed(2)}</span>
                </div>
                <div className="item-controls">
                  <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
                  <button onClick={() => removerDoCarrinho(item.id)}><Icon path={mdiDelete} size={1} /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-total">
        <h3>Total</h3>
        <p>R$ {calcularTotal(carrinho).toFixed(2)}</p>
      </div>
    </aside>
  );
};

export default CartModal;
