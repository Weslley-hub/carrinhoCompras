/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Siderbar.css';

const Sidebar = ({ categorias, setCategoriaSelecionada }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSiderbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSiderbar} className="toggle-btn">
        {isOpen ? '<' : '>'}
      </button>
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
