import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

import './footer.css';

export default function Footer() {
  return (
    <>
      <div className='map-container'>
        <h3>VENI A VISITARNOS!</h3>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.84527607317!2d-60.22590982501397!3d-33.34899179232219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7677794af6f55%3A0xe206dfdf4b934b43!2sAv.%20Falc%C3%B3n%20850%2C%20B2900%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1741274836775!5m2!1ses!2sar'
          width='600'
          height='450'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>

      <footer id='footer' className='footer'>
        <div className='footer-container'>
          <div className='footer-container-info'>
            <MdLocationOn className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Av. Falcon 850</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillEnvelopeFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>info@maquinariaagro.com</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillTelephoneFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>03641 – 280521</h4>
          </div>
        </div>
      </footer>

      <div className='autor'>
        <p className='autor-texto'>
          ® MAQUINARIA AGRO | Powered{' '}
          <a
            style={{
              textDecoration: 'none',
              color: 'green',
              cursor: 'pointer',
            }}
            href='https://virtualdesigns.tech'
          >
            Virtual Designs
          </a>
        </p>
      </div>
    </>
  );
}
