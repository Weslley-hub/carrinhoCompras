/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import './CardModal.css';

const ItemCarrinho = ({ item, removerDoCarrinho, alterarQuantidade }) => {
  
  return (
   

    <>
    {item.quantidade > 0 && (
      <li key={item.id}>
        <div className="item-info">
          <span>{item.nome}</span>
          <span>R$ {item.valor.toFixed(2)}</span>
        </div>
        <div className="item-controls">
          <div className="item-quantity">
            <button
              onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>-</button>
            <span>{item.quantidade}</span>
            <button
              onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
          </div>
          <div className="item-remove">
            <button
              style={{
                backgroundColor: 'transparent',
                border: 0}}
              onClick={() => removerDoCarrinho(item.id)}>
                <Icon path={mdiDelete} size={1} />
            </button>
          </div>
        </div>
      </li>)}
    </>
    
  );
};

export default ItemCarrinho;
