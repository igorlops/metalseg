import React, { useContext } from 'react';

function Footer() {

  return (
    <footer className={`footer text-center border-top py-3`}>
      <div className="container">
        <p className="small">Copyright © {new Date().getFullYear()} MetalSeg</p>
        <p className="small">Todos os direitos reservados</p>
      </div>
    </footer>

  );
}

export default Footer;
