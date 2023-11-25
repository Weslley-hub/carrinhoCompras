/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Menu.css';

const Menu = ({ categoriaSelecionada, menuData, adicionarAoCarrinho }) => {
  const produtosCategoria = menuData[categoriaSelecionada] || [];

  return (
    <div className="menu-container">
      <div className="menu">
        <h2>{categoriaSelecionada}</h2>
        <div className="card-container">
          {produtosCategoria.map((produto, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p>R${produto.valor.toFixed(2)}</p>
                <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
