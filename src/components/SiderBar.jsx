import React from 'react';
import './Siderbar.css';

const Sidebar = ({ categorias, setCategoriaSelecionada }) => {
  return (
    <aside className="sidebar">
      <h2>Categorias</h2>
      <ul>
       {categorias.map((categoria, index) => (
          <li key={index}>
            <button
              className="categoria-btn"
              onClick={() => setCategoriaSelecionada(categoria)}
            >
              {categoria}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
