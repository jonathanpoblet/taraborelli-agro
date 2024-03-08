import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

import './footer.css';

export default function Footer() {
  return (
    <>
      <div className='map-container'>
        <h3>VENI A VISITARNOS!</h3>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13221.53085110048!2d-60.0977978!3d-34.0597023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b99d1fe459e2b9%3A0x36fe348970541600!2sTaraborelli%20Agro%20-%20Concesionario%20New%20Holland!5e0!3m2!1ses-419!2sar!4v1701787551739!5m2!1ses-419!2sar'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <footer id='footer' className='footer'>
        <div className='footer-container'>
          <div className='footer-container-info'>
            <MdLocationOn className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>Ruta 8 km 175,5 - Arrecifes</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillEnvelopeFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>info@taraborelliagro.com</h4>
          </div>
          <div className='footer-container-info'>
            <BsFillTelephoneFill className='footer-container-info-icon' />
            <h4 className='footer-container-info-text'>02346 – 470995</h4>
          </div>
        </div>
      </footer>

      <div className='autor'>
        <p className='autor-texto'>® TARABORELLI AGRO</p>
      </div>
    </>
  );
}
