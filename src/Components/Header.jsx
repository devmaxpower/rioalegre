import React from 'react'
import LogoVerde from '../assets/img/logo-verde.svg'
import RedesSociales from './RedesSociales'
import menuIcon from '../assets/img/menu.svg'
const Header = ({ className, onMenuClick }) => {
  return (
    <header className={className}>
      <nav className='contenedor'>
        <a className='logo-header' href="#">
          <img src={LogoVerde} alt="" />
        </a>
        <ul>
          <li>
            <a href="#proyecto">Proyecto</a>
          </li>
          <li className="line"></li>
          <li>
            <a href="#masterplan">Masterplan</a>
          </li>
          <li className="line"></li>
          <li>
            <a href="#entorno">Galería</a>
          </li>
          <li className="line"></li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <RedesSociales />
        <a className="menuMobile" onClick={onMenuClick}>
          <img src={menuIcon} alt="" />
        </a>
      </nav>
    </header>
  )
}

export default Header