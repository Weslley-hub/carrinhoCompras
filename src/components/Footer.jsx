import React from 'react';
import './Footer.css';

const Footer = ({}) => {

  return (
    <footer className="footer">
      <div>
        <div className='autor'>
          <p>Todos os direitos reservados King Burguer © 2023</p>
        </div>
        <div className='autores'>
          <div className='autor'>
            <p>Desenvolvido por Weslley Teixeira</p>
            <img style={{ borderRadius: '50%', width: '30px', height: '30px'}} src="https://avatars.githubusercontent.com/u/85944579?v=4" alt="Logo" />
          </div>
          <div className='autor'>
            <p>Desenvolvido por Alex Mota</p>
            <img style={{ borderRadius: '50%', width: '30px', height: '30px'}} src="https://avatars.githubusercontent.com/u/99368230?v=4" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  