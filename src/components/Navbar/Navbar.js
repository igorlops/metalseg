import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleThemeChange = () => {
  };
  return (
    <div id='navbar-desktop'>
        <nav className={`navbar navbar-expand fixed-top ${isScrolled ? 'bg-light-subtle border-bottom' : 'bg-transparent'} border-body`} style={{transition:".5s"}}>
          <div className="container">
            <Link className="navbar-brand" to="header" smooth={true} duration={500}>
              <img src="imgs/logo.jpeg" 
                alt="Logomarca Senhor Garotinho" 
                width={'70'}/>  
            </Link>    
            <ul className='navbar-nav'>
                <li className='nav-item'><Link className={`nav-link ${(isScrolled ? ('') : ('text-white'))}`} to="header" smooth={true} duration={500}>Home</Link></li>
                <li className='nav-item'><Link className={`nav-link ${(isScrolled ? ('') : ('text-white'))}`} to="sobre" smooth={true} duration={500}>Sobre</Link></li>
                <li className='nav-item'><Link className={`nav-link ${(isScrolled ? ('') : ('text-white'))}`} to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                <li className='nav-item'><Link className={`nav-link ${(isScrolled ? ('') : ('text-white'))}`} to="projetos" smooth={true} duration={500}>Projetos</Link></li>
                <li className='nav-item'><Link className={`nav-link ${(isScrolled ? ('') : ('text-white'))}`} to="contato" smooth={true} duration={500}>Contato</Link></li>
            </ul>
            
          </div>
        </nav>
    </div>
  )
}

export default Navbar