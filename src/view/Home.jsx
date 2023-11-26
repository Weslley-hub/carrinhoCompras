/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SiderBar';
import Menu from '../components/Menu';
import menuData from '../data/menuData';
import './Home.css';
import CartModal from '../components/CardModal';

const Home = () => {
  const categoriasDisponiveis = ['Hamburguers', 'Pizzas', 'Bebidas', 'Sobremesas'];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Hamburguers');
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [totalCarrinho, setTotalCarrinho] = useState(0);

  const alterarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho];
    const itemExistente = novoCarrinho.find((item) => item.id === produto.id);

    setTotalCarrinho(totalCarrinho + 1);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      novoCarrinho.push({ ...produto, quantidade: 1 });
    }
  
    setCarrinho(novoCarrinho);
  };

  const mostrarOuEsconderCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho)
  }

  const removerDoCarrinho = (produtoId) => {
    setTotalCarrinho(totalCarrinho - 1);
    const novoCarrinho = carrinho.filter((item) => item.id !== produtoId);
    setCarrinho(novoCarrinho);
  };

  const calcularItensNoCarrinho = (carrinhoItens) => {
    var total = 0;
    for (let i = 0; i < carrinhoItens.length; i++) {
      total += carrinhoItens[i].quantidade;
      console.log("valor individual",carrinhoItens[i].quantidade);
    }
    console.log(total);
    return total;
  }

  const alterarQuantidade = (produtoId, quantidade) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produtoId) {
        if(item.quantidade > 0){
          item.quantidade = quantidade;
        }
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="home">
      <Header
        carrinho={carrinho}
        mostrarOuEsconderCarrinho={mostrarOuEsconderCarrinho} />
      <div className="content">
        <Sidebar categorias={categoriasDisponiveis} 
                 setCategoriaSelecionada={alterarCategoria} 
                />
        <Menu categoriaSelecionada={categoriaSelecionada} 
              menuData={menuData} 
              adicionarAoCarrinho={(produto) => adicionarAoCarrinho(produto, carrinho, setCarrinho)}
              />
        {mostrarCarrinho && (
          <CartModal 
           carrinho={carrinho}
           removerDoCarrinho={removerDoCarrinho}
           alterarQuantidade={alterarQuantidade}
         />
        )}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
