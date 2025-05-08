import React from 'react'
import entornoImg from '../assets/img/entorno.jpg'

const Ubicacion = () => {
  return (
    <section id='ubicacion'>
        <article className="contenedor">
            <h2>EXCELENTE UBICACIÓN CON FÁCIL ACCESO</h2>
            <p>Hermoso entorno con abundante vegetación y acceso al Rio Pedregoso.</p>
            <p>Cercano a ríos y lagos de la zona.</p>
        </article>
        <article className='contenedor'>
          <img src={entornoImg} alt="" />
        </article>
    </section>
  )
}

export default Ubicacion