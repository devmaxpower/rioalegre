import React from 'react'
import Metraje from '../assets/img/icono-metraje.svg'
import Urbanizado from '../assets/img/icono-urbanizado.svg'
import Bosque from '../assets/img/icono-bosque.svg'

const ProjectSection = () => {
  return (
    <section id='proyecto'>
        <article className='contenedor'>
            <h2>Tranquilidad y todas las comodidades que necesitas</h2>
            <p>Loteo con caminos estabilizados, agua en cada parcela, energía eléctrica (debe pedirse empalme en Compañía General de Electricidad),portón eléctrico e internet. El loteo cuenta con 2 accesos, ambos con portón eléctrico que funcionan con control remoto y teléfono celular.</p>
            <ul className="caracteristicas">
                <li>
                    <img src={Urbanizado} alt="" />
                    <p><b>30</b> parcelas<br />
                    urbanizadas</p>
                </li>
                <li>
                    <img src={Metraje} alt="" />
                    <p>Todas de<br />
                    <b>5.000 m<sup>2</sup></b></p>
                </li>
                <li>
                    <img src={Bosque} alt="" />
                    <p>
                    Bosque<br />
                    <b>Nativo</b>
                    </p>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default ProjectSection