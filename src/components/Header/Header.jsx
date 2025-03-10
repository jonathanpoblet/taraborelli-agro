import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActivePage } from '../../app/state/globalSlice';

import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

import './header.css';

export default function Header() {
  const dispatch = useDispatch();

  const activeLink = useSelector(state => state.global.global);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function changePage(page) {
    setMobileMenuOpen(!mobileMenuOpen);
    dispatch(setActivePage(page));
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-container-info'>
          <a className='header-container-info-a' href='https://www.instagram.com/maquinariagro/'>
            <AiOutlineInstagram />
          </a>
        </div>
        <div className='header-container-info'>
          <a className='header-container-tel' href='tel:03641 – 280521'>
            Telefono: 03641 – 280521
          </a>
        </div>
      </div>

      <div className='header-search'>
        <Link to='/'>
          <img
            onClick={() => changePage('INICIO')}
            className='header-search-img'
            src='./assets/agro-logo.png'
            alt='Kelly'
          />
        </Link>
        {mobileMenuOpen ? (
          <RxCross1
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='header-search-container-iconMobile'
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='header-search-container-iconMobile'
          />
        )}
      </div>

      <nav className='header-nav'>
        <ul
          className={
            window.innerWidth < 937 && mobileMenuOpen ? 'header-nav-ul-mobile' : 'header-nav-ul'
          }
        >
          <li className='header-nav-ul-li'>
            <Link
              onClick={() => changePage('INICIO')}
              className={
                activeLink == 'INICIO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link'
              }
              to='/'
            >
              INICIO
            </Link>
          </li>
          <li className='header-nav-ul-li'>
            <Link
              onClick={() => changePage('NOSOTROS')}
              className={
                activeLink == 'NOSOTROS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link'
              }
              to='/nosotros'
            >
              NOSOTROS
            </Link>
          </li>
          <li className='header-nav-ul-li'>
            <Link
              onClick={() => changePage('PRODUCTOS')}
              className={
                activeLink == 'PRODUCTOS' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link'
              }
              to='/productos'
            >
              PRODUCTOS
            </Link>
          </li>

          <li className='header-nav-ul-li'>
            <Link
              onClick={() => changePage('CONTACTO')}
              className={
                activeLink == 'CONTACTO' ? 'header-nav-ul-li-link-active' : 'header-nav-ul-li-link'
              }
              to='/contacto'
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
