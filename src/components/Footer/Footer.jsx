import React, { useState } from 'react';

import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

import './footer.css';

export default function Footer() {
  const [footerOpen, setFooterOpen] = useState(false)
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='footer-container'>
          <img id='footer-container-img' className='footer-container-img' src='../../../public/assets/k.png' alt='K'/>
        </div>
        
        <div className='footer-container'>
          <h3 className='footer-container-title'>Chivilcoy</h3>
          <div className='footer-container-info'>
            <BsFillTelephoneFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Tel: 02342 – 480359</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillEnvelopeFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>De 8hs. a 19hs.</h4>
          </div>
          <div className='footer-container-info'>
            <MdLocationOn className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Ruta Nac. Nº 5 – Km.154.5</h4>
          </div>
        </div>

        <div className='footer-container'>
          <h3 className='footer-container-title'>BRAGADO</h3>
          <div className='footer-container-info'>
            <BsFillTelephoneFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Tel: 02342 – 430803</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillEnvelopeFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>De 8hs. a 19hs.</h4>
          </div>
          <div className='footer-container-info'>
            <MdLocationOn className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Ruta Nac. Nº 5 – Km. 209.5</h4>
          </div>
        </div>

        <div className='footer-container'>
          <h3 className='footer-container-title'>ALBERTI</h3>
          <div className='footer-container-info'>
            <BsFillTelephoneFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Tel: 02346 – 470995</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillEnvelopeFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>De 8hs. a 12hs. y de 15hs. a 19hs.</h4>
          </div>
          <div className='footer-container-info'>
            <MdLocationOn className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Ruta Nac. Nº 5 – Km. 190</h4>
          </div>
        </div>
      </footer>

      {
        footerOpen &&
          <div className='footer-mobile'>
            <ul className='footer-mobile-ul'>
              <li className='footer-mobile-ul-li'>
                <a className='footer-mobile-ul-li-a' href='tel:2342480359'>Chivilcoy: 2342 - 480359</a>
              </li>
              <li className='footer-mobile-ul-li'>
                <a className='footer-mobile-ul-li-a' href='tel:2346470995'>Alberti: 2346 - 470995</a>
              </li>
              <li className='footer-mobile-ul-li'>
                <a className='footer-mobile-ul-li-a' href='tel:2342430803'>Bragado: 2342 - 430803</a>
              </li>
            </ul>
          </div>
      }

      <div className='footer-mob'>
        <BsFillTelephoneFill
          className='footer-mob-button'
          onClick={() => setFooterOpen(!footerOpen)}
        />
      </div>

      <div className='autor'>
        <p className='autor-texto'>® TARABORELLI AGRO</p>
      </div>
    </>
  )
}
