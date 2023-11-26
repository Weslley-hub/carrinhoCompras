import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import './CardModal.css';
import ItemCarrinho from './ItemCarrinho';

const CartModal = ({ carrinho, removerDoCarrinho, alterarQuantidade }) => {
  const [showMessage, setShowMessage] = useState(false);

  const calcularTotal = (carrinhoItens) => {
    return carrinhoItens.reduce((total, item) => total + item.valor * item.quantidade, 0);
  };

  const handleFinalizarCompra = () => {
    console.log("Finalizar Compra");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 4000); // Oculta a mensagem após 4 segundos
  };

  return (
    <aside className="cart-sidebar">
      {showMessage && <div className="message">Venda finalizada!</div>}

      <div className="cart-items">
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            <ul>
              {carrinho.map((item) => (
                ItemCarrinho({ item, removerDoCarrinho, alterarQuantidade })
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total</h3>
              <p>R$ {calcularTotal(carrinho).toFixed(2)}</p>
            </div>
          </>
        )}
        <div className="cart-finalizar-compra">
          <button
            className="btn"
            onClick={handleFinalizarCompra}>Finalizar Compra</button>
        </div>
      </div>
    </aside>
  );
};

export default CartModal;
