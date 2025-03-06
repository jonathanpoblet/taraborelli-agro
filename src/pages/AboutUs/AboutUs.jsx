import { FaDollarSign, FaHourglassHalf, FaTruckMonster } from 'react-icons/fa';
import './aboutUs.css';

export default function AboutUs() {
  return (
    <main className='main fade-in'>
      <section className='main-us'>
        <article className='main-us-article'>
          <img className='main-us-article-img' src='./assets/truck.jpeg' />
          <div className='main-us-article-container'>
            <p>
              Somos una empresa agricola con más de 35 años de historia, las más importantes marcas
              del mercado confían en nosotros es por eso que somos Concesionario Oficial New Holland
              , contamos con un equipo de profesionales, con un fuerte Dinamismo y gran
              adaptabilidad a las circunstancias de mercado y siempre orientado al cliente para
              brindar soluciones personalizadas.
            </p>
            <br></br>
            <p style={{ marginBottom: 10 }}>Nos destacamos por:</p>
            <p style={{ marginBottom: 10 }}>• Calidad y Atención personalizada</p>
            <p style={{ marginBottom: 10 }}>
              • Planes y herramientas de financiación que se adaptan a las necesidades de cada
              cliente
            </p>
            <p style={{ marginBottom: 10 }}>
              • Amplio stock de maquinaria y repuestos para brindarte la mejor atención
            </p>
            <p style={{ marginBottom: 10 }}>
              • Amplia cobertura de zona para estar siempre cerca tuyo
            </p>
          </div>
        </article>
      </section>
      <section className='main-info'>
        <article className='main-info-article'>
          <h2>ELEGÍ MAQUINARIA AGRO</h2>
          <h4>Te brindamos las mejores condiciones para que puedas adquirir tu producto</h4>

          <div className='main-info-article-container'>
            <div className='main-info-article-container-finance'>
              <FaDollarSign className='main-info-article-container-finance-icon' />
              <h6 className='main-info-article-container-finance-text'>
                Financiación en Pesos y comodas cuotas
              </h6>
            </div>

            <div className='main-info-article-container-finance'>
              <FaHourglassHalf
                id='info-icon2'
                className='main-info-article-container-finance-icon'
              />
              <h6 className='main-info-article-container-finance-text'>
                Entregas inmediatas y pactadas
              </h6>
            </div>

            <div className='main-info-article-container-finance'>
              <FaTruckMonster className='main-info-article-container-finance-icon' />
              <h6 className='main-info-article-container-finance-text'>
                Maquinaria agricola de excelente calidad
              </h6>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
