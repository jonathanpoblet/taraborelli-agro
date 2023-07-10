import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import './header.css';
import { setActivePage } from '../../app/state/globalSlice';

export default function Header() {

  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.global.global);

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
          <img onClick={() => dispatch(setActivePage('INICIO'))} className='header-search-kelly' src='../../../public/assets/kelly.png' alt='Kelly' />
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
            <Link onClick={() => dispatch(setActivePage('INICIO'))} className={ activeLink == 'INICIO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/' >
              INICIO
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setActivePage('NOSOTROS'))} className={ activeLink == 'NOSOTROS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setActivePage('NUEVOS'))} className={ activeLink == 'NUEVOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              NUEVOS
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setActivePage('USADOS'))} className={ activeLink == 'USADOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              USADOS
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setActivePage('REPUESTOS'))} className={ activeLink == 'REPUESTOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              REPUESTOS
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setActivePage('CONTACTO'))} className={ activeLink == 'CONTACTO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
