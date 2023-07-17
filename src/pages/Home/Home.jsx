import { Link } from 'react-router-dom';
import ContactSection from '../../components/ContactSection/ContactSection';
import './home.css';

export default function Home() {

  const data = ['https://dealers.rewebmkt.com/images/20220318015940-mini.png', 'https://dealers.rewebmkt.com/images/20220318015940-mini.png', 'https://dealers.rewebmkt.com/images/20220318015940-mini.png', 'https://dealers.rewebmkt.com/images/20220318015940-mini.png', 'https://dealers.rewebmkt.com/images/20220318015940-mini.png']

  return (
    <main className='home fade-in'>
      <section className='home-banner'>
        <img alt='banner' src='../../../public/assets/banner.png' />
        <div className='slide-in'>
          <h1>NEW HOLLAND</h1>
          <Link className='home-banner-div-link' to='/productos'>
            VER PRODUCTOS
          </Link>
        </div>
      </section>
      <section className='home-productos'>
        <div className='home-productos-head'>
          <h3>CONSULTA NUESTROS PRODUCTOS</h3>
          <Link className='home-productos-head-link' to='/productos'>VER MÁS</Link>
        </div>
        <div className='home-productos-photos'>
          {
            data.map((d,index) => {
              return (
                <img src={d} alt='product' key={index} />
              )
            })
          }
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
