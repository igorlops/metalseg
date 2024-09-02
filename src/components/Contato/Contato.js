import './Contato.css'

const Contato = () => {
  return (
    <div id='contato' className='py-5 text-center'>
      <div className="container">
      <h2 className={'titulo-section-light'}>Entre em contato conosco</h2>
      <div className="divisor"></div>

        <div className="d-flex justify-content-around flex-row flex-wrap">
          <div className="d-flex justify-content-center align-items-center flex-column col-xs-12 col-md-6 my-5">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.4582222391105!2d-38.58898454326616!3d-3.707084670370645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74a1299211173%3A0xc3a1afa9ac481827!2sRua%2002%2C%2025%20-%20Jangurussu%2C%20Fortaleza%20-%20CE%2C%2060870-844!5e0!3m2!1spt-BR!2sbr!4v1725268436490!5m2!1spt-BR!2sbr" 
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>

         </div>
          <div className="d-flex justify-content-center flex-column col-xs-12 col-md-6 my-5">
            <div className="endereco-barbearia">
              <h2>Endereço </h2>
              <p>Rua 02, 25 </p> <p>Jangurussu, Fortaleza - CE, 60.870-844 </p>
            </div>
            <div className="redes-contatos pt-2">
              <h2>Contato</h2>

              <h4>Nossas redes</h4>
              <div className='d-flex justify-content-center flex-flow gap-2'>
                <p><a target='_blank' href="https://www.instagram.com/portoes_metalsegfortaleza/" className={`btn btn-instagram`}><i class="bi bi-instagram"></i></a></p>
                <p><a target='_blank' href="https://www.facebook.com/metalsegfortaleza/?locale=pt_BR" className={`btn btn-primary`}><i class="bi bi-facebook"></i></a></p>
                <p><a target='_blank' href="https://wa.me/5585988771069?text=Ola,%20gostaria%20de%20mais%20sobre%20seu%20servico" className={`btn btn-success`}><i class="bi bi-whatsapp"></i></a></p>
              </div>
              <p>Nosso telefone <a target='_blank' style={{textDecoration:"none"}} href="tel:85988771069">(85) 98877-1069</a></p>
            </div>
            <div className="col-12 d-flex justify-content-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato