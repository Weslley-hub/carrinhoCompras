import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SiderBar';
import Menu from '../components/Menu';
import menuData from '../data/menuData';
import './Home.css';
import CartModal from '../components/CardModal';

const Home = () => {
  const categoriasDisponiveis = ['Hamburguers', 'Pizzas', 'Bebidas', 'Sobremesas'];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Hamburguers');
  const [carrinho, setCarrinho] = useState([]);

  const alterarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    setMenuProdutos(menuData[categoria]);
  };

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho];
    const itemExistente = novoCarrinho.find((item) => item.id === produto.id);
  
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      novoCarrinho.push({ ...produto, quantidade: 1 });
    }
  
    setCarrinho(novoCarrinho);
  };

  const removerDoCarrinho = (produtoId) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== produtoId);
    setCarrinho(novoCarrinho);
  };

  const alterarQuantidade = (produtoId, quantidade) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produtoId) {
        item.quantidade = quantidade;
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="home">
      <Header carrinhoItens={carrinho.length} />
      <div className="content">
        <Sidebar categorias={categoriasDisponiveis} 
                 setCategoriaSelecionada={alterarCategoria} 
                />
        <Menu categoriaSelecionada={categoriaSelecionada} 
              menuData={menuData} 
              adicionarAoCarrinho={(produto) => adicionarAoCarrinho(produto, carrinho, setCarrinho)}
              />
         <CartModal 
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          alterarQuantidade={alterarQuantidade}
        />
      </div>
    </div>
  );
};

export default Home;
