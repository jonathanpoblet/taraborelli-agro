import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActivePage } from '../../app/state/globalSlice';

import { AiOutlineInstagram, AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

import './header.css';

export default function Header() {

  const dispatch = useDispatch();

  const activeLink = useSelector((state) => state.global.global);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);


  function changePage(page) {
    setMobileMenuOpen(!mobileMenuOpen)
    dispatch(setActivePage(page))
  }

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
          <img onClick={() => changePage('INICIO')} className='header-search-kelly' src='../../../public/assets/taraborelli-agro-logo.png' alt='Kelly' />
        </Link>
        <div className='header-search-container'>
          <input className='header-search-container-input' type='text' placeholder='¿Qué estas buscando?' />
          <AiOutlineSearch className='header-search-container-icon' />
        </div>
        {
          mobileMenuOpen ? 
          <RxCross1 onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='header-search-container-iconMobile' />
          :
          <AiOutlineMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='header-search-container-iconMobile' />

        }
      </div>

      <nav className='header-nav'>
        {
          mobileMenuOpen && window.innerWidth < 700 && 
          <div className='header-search-container' style={{display: 'flex'}}>
            <input className='header-search-container-input' type='text' placeholder='¿Qué estas buscando hoy?' />
            <AiOutlineSearch className='header-search-container-icon' />
          </div>
        }
        <ul className={ window.innerWidth < 750 && mobileMenuOpen ? 'header-nav-ul-mobile' : 'header-nav-ul' }>
          <li className='header-nav-ul-li'>
            <Link onClick={() => changePage('INICIO')} className={ activeLink == 'INICIO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/' >
              INICIO
            </Link>
          </li>
          <li  className='header-nav-ul-li'>
            <Link onClick={() => changePage('NOSOTROS')} className={ activeLink == 'NOSOTROS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/nosotros'>
              NOSOTROS
            </Link>
          </li>
          <li  className='header-nav-ul-li'>
            <Link onClick={() => changePage('PRODUCTOS')} className={ activeLink == 'PRODUCTOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/productos'>
              PRODUCTOS
            </Link>
          </li>
          <li  className='header-nav-ul-li'>
            <Link onClick={() => changePage('USADOS')} className={ activeLink == 'USADOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/usados'>
              USADOS
            </Link>
          </li>
          <li  className='header-nav-ul-li'>
            <Link onClick={() => changePage('REPUESTOS')} className={ activeLink == 'REPUESTOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/'>
              REPUESTOS
            </Link>
          </li>
          <li  className='header-nav-ul-li'>
            <Link onClick={() => changePage('CONTACTO')} className={ activeLink == 'CONTACTO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link' } to='/contacto'>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
