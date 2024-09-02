import React, { useContext } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { ThemeContext } from '../../theme/Theme'; // Assuming your theme folder is named 'theme'

const NavbarMobile = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id='navbar-mobile' className='mb-5'>
        <nav class={`navbar bg-light-subtle border-bottom fixed-top border-body mb-5`}>
          <div class="container-fluid">
            <a className="navbar-brand">
              <img width={50} src="imgs/logo.jpeg" alt="Logomarca MetalSeg" />  
            </a>   
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`offcanvas offcanvas-end text-bg-light`} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <img width={200} src="imgs/logo-completa.jpeg" alt="Logomarca MetalSeg" />  
                <button type="button" class={`btn-close 'btn-close-black`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className='nav-link'><Link className={`nav-link text-dark`} data-bs-dismiss="offcanvas" to="header" smooth={true} duration={500}>Home</Link></li>
                    <li className='nav-link'><Link className={`nav-link text-dark`} data-bs-dismiss="offcanvas" to="sobre" smooth={true} duration={500}>Sobre</Link></li>
                    <li className='nav-link'><Link className={`nav-link text-dark`} data-bs-dismiss="offcanvas" to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                    <li className='nav-link'><Link className={`nav-link text-dark`} data-bs-dismiss="offcanvas" to="projetos" smooth={true} duration={500}>Projetos</Link></li>
                    <li className='nav-link'><Link className={`nav-link text-dark`} data-bs-dismiss="offcanvas" to="contato" smooth={true} duration={500}>Contato</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavbarMobile