import React, { useContext } from 'react'
import './Sobre.css'
import ButtonCTA from '../Itens/ButtonCTA';

const Sobre = () => {
  return (
    <div id='Sobre' className='py-5 text-center'>
      <div className="container">
        <h2 className={'titulo-section-light'}>Sobre nós</h2>
        <div className="divisor"></div>

        <div className='d-flex justify-content-around flex-row flex-wrap'>
          <div className='col-sm-12 col-lg-6'>
            <h4>MetalSeg</h4>
            <p>Estamos Há Mais de 12 Anos no Mercado de Portões Automatizados em Geral. 
              Somos Especialistas em Todos os Modelos: Portões de Correr, Portões Basculantes, 
              Portas e Portões de Enrolar. Temos um Portfólio Completo de Modelos e Materiais 
              Para Agradar Todos os Gostos e Bolsos</p>
            <p style={{fontFamily:"Dancing Script"}}>Marcos Lima</p>
          </div>
          <div className='col-sm-12 col-lg-6'>
            <h4>MetalSeg</h4>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre