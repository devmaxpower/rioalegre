import React from 'react'
import LogoVerde from '../assets/img/logo-verde.svg'

const ContactoSection = () => {
  return (
    <section id='contacto'>
        <article className="contenedor">
            <h2>Contacto</h2>
            <p>Escríbenos para agendar una visita.</p>
        </article>
        <article className="contenedor col-x3">
            <div className="col">
                <img src={LogoVerde} alt="" />
            </div>
            <div className="col">
                <form action="">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' id='nombre' />
                    <label htmlFor="correo">Correo</label>
                    <input type="email" name='correo' id='correo' />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name='mensaje' id='mensaje'></textarea>
                    <input type="submit" value='Enviar' />
                </form>
            </div>
            <div className="col"></div>
        </article>
    </section>
  )
}

export default ContactoSection