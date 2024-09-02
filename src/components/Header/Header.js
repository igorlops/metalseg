import React, { useContext, useEffect } from 'react'
import './Header.css'
import Aos from 'aos';
import { ThemeContext } from '../../theme/Theme';
import ButtonCTA from '../Itens/ButtonCTA';

const Header = () => {
  useEffect(()=>{
    Aos.init()
  },[]);

  return (
    <header id="home" className="header-container">
      <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="imgs/inicio_banner.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item active">
            <img src="imgs/banner_portas_de_enrolar_automatico.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="imgs/banner_portao_basculante.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="imgs/banner_cercas_eletricas.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="imgs/banner_cercas_concertina.png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  )
}

export default Header