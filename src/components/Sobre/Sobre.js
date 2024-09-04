import React, { useContext, useEffect, useState } from 'react'
import './Sobre.css'
import ButtonCTA from '../Itens/ButtonCTA';
import { Link } from 'react-scroll';

const Sobre = () => {
  const [count, setCount] = useState(0);
    const target = 20; // Número de anos de experiência

    useEffect(() => {
        let timer;
        if (count < target) {
            timer = setInterval(() => {
                setCount(prevCount => Math.min(prevCount + 1, target));
            }, 400); // Intervalo para atualizar a contagem, ajuste conforme necessário
        }

        return () => clearInterval(timer);
    }, [count]);

  return (
    <div id='sobre' className='py-5 text-center'>
      <div className="container">
        <h2 className={'titulo-section-light'}>Sobre nós</h2>
        <div className="divisor"></div>

        <div className='d-flex justify-content-around flex-row flex-wrap'>
          <div className='col-sm-12 col-lg-6' style={{textAlign:"left"}}>
            <h4 className={'titulo-metalseg'}>MetalSeg</h4>
            <p>Estamos há mais de 20 anos no mercado de portões automatizados em geral. 
            Fabricamos todos os modelos em alumínio e somos especialistas em portões basculante e em porta de enrolar automática.</p>
            <p>Temos um portfólio completo de modelos e cores, fabricamos o seu portão sob medida.</p>
            <p style={{fontFamily:"Dancing Script"}}>Marcos Lima</p>
            <Link className='btn btn-warning-light mb-5' to="projetos" smooth={true} duration={500}>Ver Portfólio</Link>
          </div>
          <div className='col-sm-12 col-lg-6'>
            <img src={`imgs/servicos/servicos_metal_seg3.jpg`} style={{width:"100%"}}/>
            <p className='bg-dark text-white p-5' style={{fontSize:"40px"}}>+{count} DE EXPERTISE</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre