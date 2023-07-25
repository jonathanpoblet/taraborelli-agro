import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../app/state/globalSlice';
import ContactSection from '../../components/ContactSection/ContactSection';
import './home.css';

export default function Home() {

  const dispatch = useDispatch();

  const data = ['https://dealers.rewebmkt.com/images/20220318015940-mini.png', 'https://dealers.rewebmkt.com/images/20220318020623-mini.png', 'https://dealers.rewebmkt.com/images/20220908010040-mini.png', 'https://dealers.rewebmkt.com/images/20220318051258-mini.png']

  return (
    <main className='home fade-in'>
      <section className='home-banner'>
        <img alt='banner' src='../../../public/assets/banner.png' />
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
            <img src='https://elconstructor.com/wp-content/uploads/2022/05/tractor-New-Holland.jpg' alt='' />
            <p>ENTREGA<br></br>INMEDIATA</p>
          </div>
          <div>
            <img src='https://static.landwirt.com/3572-98cbe7d550898e136d0028120217f52c-3154973-0vb.jpg' alt='' />
            <p>ATENCIÓN<br></br>PERSONALIZADA</p>
          </div>
          <div>
            <img src='https://agrotecnica.online/wp-content/uploads/2021/07/New-Holland-launches-new-T7-Heavy-Duty_590561.jpg' alt='' />
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
