import React from 'react'
import icoFace from '../assets/img/ico-face.svg'
import icoInsta from '../assets/img/ico-insta.svg'

const RedesSociales = () => {
  return (
    <ul className="redes">
        <li>
        <a href="#">
            <img src={icoFace} alt="" />
        </a>
        </li>
        <li>
        <a href="#">
            <img src={icoInsta} alt="" />
        </a>
        </li>
    </ul>
  )
}

export default RedesSociales