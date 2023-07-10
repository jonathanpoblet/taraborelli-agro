import React from 'react';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Chivilcoy</h3>
        <div>
          <BsFillTelephoneFill/>
          <h4>Tel: 02342 – 480359</h4>
        </div>
        <div>
          <BsFillEnvelopeFill/>
          <h4>De 8hs. a 19hs.</h4>
        </div>
      </div>
      <div>
        <h3>BRAGADO</h3>
        <div>
          <BsFillTelephoneFill/>
          <h4>Tel: 02342 – 480359</h4>
        </div>
        <div>
          <BsFillEnvelopeFill/>
          <h4>De 8hs. a 19hs.</h4>
        </div>
      </div>
      <div>
        <h3>ALBERTI</h3>
        <div>
          <BsFillTelephoneFill/>
          <h4>Tel: 02342 – 480359</h4>
        </div>
        <div>
          <BsFillEnvelopeFill/>
          <h4>De 8hs. a 19hs.</h4>
        </div>
      </div>
    </footer>
  )
}
