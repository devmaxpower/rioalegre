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
          <iframe src="https://www.lanube360.com/entre-rios/" frameborder="0"></iframe>
        </article>
        <article className="contenedor">
          <div className="grid-x3">
            <div className="col"></div>
            <div className="col group-datos">
              <div className="datos">
                <h5>Villarrica</h5>
                <p>22 km. de distancia</p>
              </div>
              <div className="datos">
                <h5>Temuco</h5>
                <p>67 km. de distancia</p>
              </div>
              <div className="datos">
                <h5>Pucón</h5>
                <p>48 km. de distancia</p>
              </div>
              <div className="datos">
                <h5>Aeropuerto Araucanía</h5>
                <p>45 km. de distancia (aprox.)</p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </article>
    </section>
  )
}

export default Ubicacion