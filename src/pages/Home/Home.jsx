import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../app/state/globalSlice';
import ContactSection from '../../components/ContactSection/ContactSection';
import './home.css';

export default function Home() {

  const dispatch = useDispatch();

  const data = ['.assets/trucks/t5-s.png', './assets/trucks/t6.png', './assets/harvester/c4-5-85.png', './assets/mixers/mgv-110f.png']

  return (
    <main className='home fade-in'>
      <section className='home-banner'>
        <img alt='banner' src='./assets/banner.png' />
        <div className='slide-in'>
          <h1>TARABORELLI<br></br> AGRO </h1>
          <Link 
            className='home-banner-div-link' 
            to='/productos'
            onClick={() => dispatch(setActivePage('PRODUCTOS'))}>
            VER PRODUCTOS
          </Link>
        </div>
      </section>
      <section className='home-looking'>
        <h2 className='home-looking-title'>ENCONTRÁ LO QUE ESTÁS BUSCANDO</h2>
        <div className='home-looking-container'>
          <div>
            <img src='./assets/home/home1.jpg' alt='Home 1' />
            <p>ENTREGA<br></br>INMEDIATA</p>
          </div>
          <div>
            <img src='./assets/home/home2.jpg' alt='Home 2' />
            <p>ATENCIÓN<br></br>PERSONALIZADA</p>
          </div>
          <div>
            <img src='./assets/home/home3.jpg' alt='Home 3' />
            <p>SERVICIO<br></br>POSTVENTA</p>
          </div>
        </div>
      </section>
      <section className='home-productos'>
        <div className='home-productos-head'>
          <h3>CONSULTA NUESTROS PRODUCTOS</h3>
          <Link 
            className='home-productos-head-link' 
            to='/productos'
            onClick={() => dispatch(setActivePage('PRODUCTOS'))}>
            VER MÁS
          </Link>
        </div>
        <div className='home-productos-photos'>
          {
            data.map((d,index) => {
              return (
                <img
                  src={d} 
                  alt='product' 
                  key={index} 
                />
              )
            })
          }
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
