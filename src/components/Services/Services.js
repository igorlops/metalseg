import {useEffect} from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import ButtonCTA from '../Itens/ButtonCTA';

const Services = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  let listServicos = [
    {
      "image":"imgs/porta-automatica.jpg",
      "title":"Porta de enrolar automática",
      "detalhes":`
        Somos referência quanto a fabricação, instalação e manutenção de portas de enrolar automática.

        Alguns dos benefícios:
        Lâminas reforças o que trazem mais segurança

        Sistema de travamento por engrenagem do motorredutor

        Baixo nível de manutenção

        Não requer uso de cadeados e placas anti-arrombamentos

        Mais rapidez e praticidade na abertura e fechamento do estabelecimento

        Valorização do estabelecimento
        Pintura eletrostática de maior resistência as intempéries

        Soleira tubular que leva mais segurança em tentativas de arrombamentos`,
    },
    {
      "image":"imgs/portao-basculante.png",
      "title":"Portão basculante",
      "detalhes":`
        Somos pioneiros nesse modelo, nosso método de instalação é inovador seguro e com design avançado.

        Principais características do portão basculante:

        Não ocupa espaço lateral do muro, ideal para casas estreitas ou que não possuam a frente livre.

        Durabilidade, o Aluminio é um material leve, e a estrutura do basculante em aço galvanizado casa  direitinho dando durabilidade e segurança.

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
      penetrantes.`,
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
                <img src={servico.image} className='card-img-top' style={{width:'100%',height:"200px"}} alt={servico.title}/>
                <div className='card-body'>
                  <div className='card-title'>
                    <h4>{servico.title}</h4>
                  </div>
                  <div className='card-text' >
                    {servico.detalhes}
                  </div>
                <ButtonCTA key={index} href={'https://wa.me/5585988771069?text=Ola,%20gostaria%20de%20mais%20sobre%20seu%20servico'} children={'Clique aqui'} className="btn btn-primary" />
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