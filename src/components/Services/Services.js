import {useContext, useEffect} from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ThemeContext } from '../../theme/Theme';
import { GalleryImages } from '../Itens/GalleryImages';
import ButtonCTA from '../Itens/ButtonCTA';

const Services = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  let listServicos = [
    {
      "image":"imgs/porta-automatica.jpg",
      "title":"Porta Industrial de Enrolar",
      "detalhes":`O portão de garagem basculante, que também é conhecido como portão flutuante, 
      se diferencia dos demais por uma característica principal: seu sistema de abertura. 
      Ele não abre como uma porta tradicional ou uma porta de correr!

      Na realidade, o portão basculante para garagem abre na vertical, mantendo sua folha móvel suspensa, 
      de modo a permitir a passagem de automóveis e pessoas.

`,
    },
    {
      "image":"imgs/portao-basculante.png",
      "title":"Portão basculante",
      "detalhes":`O portão de garagem basculante, que também é conhecido como portão flutuante, 
      se diferencia dos demais por uma característica principal: seu sistema de abertura. 
      Ele não abre como uma porta tradicional ou uma porta de correr!

      Na realidade, o portão basculante para garagem abre na vertical, 
      mantendo sua folha móvel suspensa, de modo a permitir a passagem de automóveis e pessoas.

`,
    },
    {
      "image":"imgs/cerca-eletrica.png",
      "title":"Cerca Elétrica",
      "detalhes":`
        A Super Cerca Elétrica tem como diferença primordial a sua robustez. 
        Essa solução foi pensada para ser realmente efetiva nas mais diversas 
        situações de proteção perimetral. Diferentemente das cercas elétricas 
        tradicionais a Super Cerca Elétrica utiliza-se de componentes mais fortes 
        e resistentes o que contribui em relação à segurança, efeito moral, 
        resistência e durabilidade.
      `,
    },
    {
      "image":"imgs/concertinas.jpg",
      "title":"Concertina",
      "detalhes":`Cerca concertina galvanizada e cerca concertina clipada.
       Crie barreiras para proteger os acessos ao seu imóvel com cerca 
       eletrificada. Uma das maneiras de se fazer proteção perimétrica, 
       é adquirir a cerca Concertina. Trata-se de uma cerca de segurança
       laminada, de forma espiralada com lâminas pontiagudas, cortantes e 
      penetrantes. Além disso, a Concertina pode ser eletrificada e ter alarme.`,
    }
  ]

  return (
    <div id='services'>
      <div className="container my-5">
        <h2 className={'titulo-section-light'}>
          Serviços
        </h2>
        <div className="divisor"></div>

        <div className="d-flex flex-row flex-wrap justify-content-around">
          {listServicos.map((servico, index) => (
            <div className="servico-individual mb-3">
              <div className={`card text-center`} style={{width:'300px'}}>
                <img src={servico.image} className='card-img-top' style={{width:'100%'}} alt={servico.title}/>
                <div className='card-body'>
                  <div className='card-title'>
                    <h4>{servico.title}</h4>
                  </div>
                  <div className='card-text' >
                    {servico.detalhes}
                  </div>
                <ButtonCTA key={index} href={'https://wa.me'} children={'Clique aqui'} className="btn btn-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services