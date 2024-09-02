import React from 'react'

const Whatsapp = () => {
  return (
    <a  href='https://wa.me/5585988771069?text=Ola,%20gostaria%20de%20mais%20sobre%20seu%20servico'
        target='_blank'
        id='button-whatsapp' 
        title='Clique aqui para chamar no WhatsApp'
        style={{zIndex:99}} rel="noreferrer">
        <i class="bi bi-whatsapp"></i>
    </a>
  )
}

export default Whatsapp