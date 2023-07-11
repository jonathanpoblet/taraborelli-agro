import { FaDollarSign, FaHourglassHalf, FaTruckMonster } from 'react-icons/fa';
import './aboutUs.css';

export default function AboutUs() {

  return (
    <main className="main fade-in">
      <section className='main-us'>
          <article className='main-us-article'>
            <img className='main-us-article-img' src='../.././../public/assets/truck.jpeg'/>
            <div className='main-us-article-container'>
              <p>Somos una empresa familiar con más de 20 años de experiencia en el rubro de la <b>maquinaria agrícola</b>, comprometida con la entrega de soluciones integrales.<br/><br/>Nuestro líder Gabriel Kelly cuenta con más de 40 años de compromiso y experiencia en el sector agropecuario. Su socio estratégico Gabriel Romano, sumó a la fuerza de venta, el conocimiento y dedicación intensa de la posventa, y juntos conformaron la empresa Gabriel E. Kelly y Cia. S.A.</p>
              <p>Durante más de diez años la compañía se convirtió en concesionario oficial de maquinaria agrícola de una reconocida multinacional. Dentro de sus marcas comercializadas se destaca la empresa Bertini en sembradoras.<br/><br/>Actualmente, y luego de un proceso de reinvención, Kelly se convierte en concesionario oficial New Holland. Un nuevo desafío que nos permite continuar fortaleciendo nuestra pasión por la venta y <b>la cercanía con nuestro cliente</b>.</p>
            </div>
          </article>
      </section>
      <section className="main-info">
        <article className="main-info-article">

          <h2>ELEGÍ NEW HOLLAND</h2>
          <h4>Te brindamos las mejores condiciones para que puedas adquirir tu producto</h4>

          <div className="main-info-article-container">
            <div className="main-info-article-container-finance">
              <FaDollarSign className="main-info-article-container-finance-icon" />                      
              <h6 className="main-info-article-container-finance-text">Financiación en Pesos y comodas cuotas</h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaHourglassHalf id="info-icon2" className="main-info-article-container-finance-icon" />
              <h6 className="main-info-article-container-finance-text">Entregas inmediatas y pactadas</h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaTruckMonster className="main-info-article-container-finance-icon" />
              <h6 className="main-info-article-container-finance-text">Maquinaria agricola de excelente calidad</h6>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
