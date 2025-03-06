import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../app/state/globalSlice';
import ContactSection from '../../components/ContactSection/ContactSection';
import './home.css';
import LookingCard from '../../components/LookingCard/LookingCard';

export default function Home() {
  const dispatch = useDispatch();

  const lookingData = [
    {
      path: '/productos',
      img: './assets/home/home1.jpg',
      page: 'PRODUCTOS',
      title: 'ENTREGA INMEDIATA',
    },
    {
      path: '/usados',
      img: './assets/home/home2.jpg',
      page: 'USADOS',
      title: 'NUEVOS',
    },
    {
      path: '/postventa',
      img: './assets/home/home3.jpg',
      page: 'POSTVENTA',
      title: 'USADOS',
    },
    {
      path: '/agricultura-de-precision',
      img: './assets/home/home4.jpg',
      page: 'AGRICULTURA DE PRECISIÓN',
      title: 'AGRICULTURA DE PRECISIÓN',
    },
  ];

  const data = [
    './assets/trucks/t4f.png',
    './assets/trucks/tk4.png',
    './assets/harvester/c4-5-85.png',
    './assets/forage/rotoenfardadoras.png',
  ];

  return (
    <main className='home fade-in'>
      <section className='home-banner'>
        <img alt='banner' src='./assets/banner.png' />
        <div className='slide-in'>
          <h1>
            MAQUINARIA<br></br> AGRO{' '}
          </h1>
          <Link
            className='home-banner-div-link'
            to='/productos'
            onClick={() => dispatch(setActivePage('PRODUCTOS'))}
          >
            VER PRODUCTOS
          </Link>
        </div>
      </section>
      <section className='home-looking'>
        <h2 className='home-looking-title'>ENCONTRÁ LO QUE ESTÁS BUSCANDO</h2>
        <div className='home-looking-container'>
          {lookingData.map((data, index) => {
            return (
              <LookingCard
                key={index}
                path={data.path}
                page={data.page}
                img={data.img}
                title={data.title}
              />
            );
          })}
        </div>
      </section>
      <section className='home-productos' style={{ marginBottom: 100 }}>
        <div className='home-productos-head'>
          <h3 style={{ marginBottom: 0 }}>CONSULTA NUESTROS PRODUCTOS</h3>
          <Link
            className='home-productos-head-link'
            to='/productos'
            onClick={() => dispatch(setActivePage('PRODUCTOS'))}
          >
            VER MÁS
          </Link>
        </div>
        <div className='home-productos-photos'>
          {data.map((d, index) => {
            return <img src={d} alt='product' key={index} />;
          })}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
