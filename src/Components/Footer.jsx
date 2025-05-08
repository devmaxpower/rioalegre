import React from 'react'
import icoWsp from '../assets/img/whatsapp-verde.svg' 

const Footer = () => {
  return (
    <footer>
        <div className="contenedor">
            <p><a href="https://wa.link/qomdaf" target='_blank'><img src={icoWsp} alt="" /> +569 95795066</a> <span>• contacto@rioalegre2.cl • Entre Rios, Villarrica.</span></p>
        </div>
    </footer>
  )
}

export default Footer