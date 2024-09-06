import React, { useContext, useEffect, useState } from 'react'
import './Sobre.css'
import ButtonCTA from '../Itens/ButtonCTA';
import { Link } from 'react-scroll';

const Sobre = () => {

  return (
    <div id='sobre' className='py-5 text-center'>
      <div className="container">
        <h2 className={'titulo-section-light'}>Sobre nós</h2>
        <div className="divisor"></div>

        <div className='d-flex justify-content-center'>
          <div className='col-sm-12' style={{textAlign:"center", maxWidth:"800px"}}>
            <h4 className={'titulo-metalseg'}>MetalSeg</h4>
            <p className='m-5'>Estamos há mais de 20 anos no mercado de portões automatizados em geral. 
            Fabricamos todos os modelos em alumínio e somos especialistas em portões basculantes e em portas de enrolar automática.<br/>
            Temos um portfólio completo de modelos e cores, fabricamos o seu portão sob medida.</p>
            <p style={{fontFamily:"Dancing Script"}}>Marcos Lima</p>
            <Link className='btn btn-warning-light mb-5' to="projetos" smooth={true} duration={500}>Ver Portfólio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre