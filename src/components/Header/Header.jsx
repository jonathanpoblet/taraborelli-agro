import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-container-info'>
          <a className='header-container-info-a' href='https://www.instagram.com/gabrielkellycia/'>
            <AiOutlineInstagram />
          </a>
          <a className='header-container-info-a' href='https://www.facebook.com/Gabriel.Kelly.Cia/'>
            <BiLogoFacebook />
          </a>
        </div>
        <div className='header-container-info'>
          <a className='header-container-tel' href='tel:2342480359'>Chivilcoy: 2342 - 480359</a>
          <a className='header-container-tel' href='tel:2346470995'>Alberti: 2346 - 470995</a>
          <a className='header-container-tel' href='tel:2342430803'>Bragado: 2342 - 430803</a>
        </div>
      </div>

      <div className='header-search'>
        <Link to='/'>
          <img className='header-search-kelly' src='../../../public/assets/kelly.png' alt='Kelly' />
        </Link>
        <div className='header-search-container'>
          <input className='header-search-container-input' type='text' placeholder='¿Qué estas buscando hoy?' />
          <AiOutlineSearch className='header-search-container-icon' />
        </div>
        <img className='header-search-newHolland' src='../../../public/assets/new-holland.png' alt='New Holland' />
      </div>

      <nav className='header-nav'>
        <ul className='header-nav-ul'>
          <li className='header-nav-ul-li'>
            <Link className='header-nav-ul-li-link' to='/'>
              INICIO
            </Link>
          </li>
          <li>
            <Link className='header-nav-ul-li-link' to='/'>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link className='header-nav-ul-li-link' to='/'>
              NUEVOS
            </Link>
          </li>
          <li>
            <Link className='header-nav-ul-li-link' to='/'>
              USADOS
            </Link>
          </li>
          <li>
            <Link className='header-nav-ul-li-link' to='/'>
              REPUESTOS
            </Link>
          </li>
          <li>
            <Link className='header-nav-ul-li-link' to='/'>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
