import './Projetos.css'
import {GalleryImages} from '../Itens/GalleryImages'
import { useEffect, useState } from 'react';
import ButtonCTA from '../Itens/ButtonCTA';

const Projetos = () => {
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
    <>
      <div id='projetos' className='py-5'>
        <GalleryImages/>
      </div>
      
      <div className='container'>
        <div className='d-flex justify-content-around flex-wrap py-5'>
          <div className=' px-5 col-sm-12 col-lg-6 text-center mb-5'>
            <p className="cta-projetos mb-3">Venha fazer parte dos nossos cases de sucesso também, não fique de fora!</p>
            <ButtonCTA children={'Entrar em contato'} href={'https://wa.me/5585988771069?text=Ola,%20gostaria%20de%20mais%20sobre%20seu%20servico'}/>
          </div>
          <div className='col-sm-12 col-lg-6'>
              <img src={`imgs/servicos/servicos_metal_seg5.jpg`} style={{width:"100%"}} alt={'Imagem serviço'}/>
              <p className='bg-dark text-white p-5' style={{fontSize:"40px"}}>+{count} DE EXPERTISE</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Projetos