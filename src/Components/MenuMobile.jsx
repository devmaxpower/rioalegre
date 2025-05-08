import React from 'react'
import RedesSociales from './RedesSociales'
import closeIcon from '../assets/img/close.svg'

const MenuMobile = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-mobile ${isOpen ? 'activo' : ''}`} >
        <ul className='ul-mobile'>
          <li>
            <a href="#proyecto"  onClick={onClose}>Proyecto</a>
          </li>
          <li>
            <a href="#masterplan"  onClick={onClose}>Masterplan</a>
          </li>
          <li>
            <a href="#entorno"  onClick={onClose}>Galería</a>
          </li>
          <li>
            <a href="#contacto"  onClick={onClose}>Contacto</a>
          </li>
        </ul>
        <RedesSociales />
        <a href="#" className="closeMenu" 
        onClick={(e) => {
            e.preventDefault();  // Evita comportamiento por defecto
            onClose();           // Ejecuta la función que cierra el menú
          }}
          >
            <img src={closeIcon} alt="" />
        </a>
    </div>
  )
}

export default MenuMobile