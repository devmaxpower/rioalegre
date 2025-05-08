import React from 'react'
import logoHome from '../assets/img/logo.svg'
import RedesSociales from './RedesSociales'
const HomeSection = () => {
  return (
    <section id='home'>
        <article className="contenedor">
            <div className="contenido-home">
                <img className="logo-home" src={logoHome} />
                <h1>Entre ríos • Villarica</h1>
                <h2>Un entorno rodeado de naturaleza</h2>
            </div>
        </article>
        <RedesSociales />
    </section>
  )
}

export default HomeSection