import React from 'react'
import logoHome from '../assets/img/logo.svg'
import RedesSociales from './RedesSociales'
import video from '../assets/video/video-home.mp4'
const HomeSection = () => {
  return (
    <section id='home'>
        <video width="640" height="360" loop muted autoplay="autoplay">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
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