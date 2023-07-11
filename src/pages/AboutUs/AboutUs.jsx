import { FaDollarSign, FaHourglassHalf, FaTruckMonster } from 'react-icons/fa';
import './aboutUs.css';

export default function AboutUs() {

  return (
    <main className="main">
      <section className="main-info">
        <article className="main-info-article">
          <img src='../.././../public/assets/kelly-sucursal.jpeg'/>
          <div>
            <p id="info-text1">Somos una empresa familiar con más de 20 años de experiencia en el rubro de la maquinaria agrícola, comprometida con la entrega de soluciones integrales.<br/><br/>Nuestro líder Gabriel Kelly cuenta con más de 40 años de compromiso y experiencia en el sector agropecuario. Su socio estratégico Gabriel Romano, sumó a la fuerza de venta, el conocimiento y dedicación intensa de la posventa, y juntos conformaron la empresa Gabriel E. Kelly y Cia. S.A.</p>
            <p id="info-text2">Durante más de diez años la compañía se convirtió en concesionario oficial de maquinaria agrícola de una reconocida multinacional. Dentro de sus marcas comercializadas se destaca la empresa Bertini en sembradoras.<br/><br/>Actualmente, y luego de un proceso de reinvención, Kelly se convierte en concesionario oficial New Holland. Un nuevo desafío que nos permite continuar fortaleciendo nuestra pasión por la venta y la cercanía con nuestro cliente.</p>
          </div>

          <h2 id="title-info" >ELEGÍ NEW HOLLAND</h2>
          <h4 id="subtitle-info" >Te brindamos las mejores condiciones para que puedas adquirir tu producto</h4>

          <div  className="main-info-article-container">
            <div className="main-info-article-container-finance">
              <FaDollarSign id="info-icon1" className="main-info-article-container-finance-icon" />                      
              <h6 id="info-text3" className="main-info-article-container-finance-text">Financiación en Pesos </h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaHourglassHalf id="info-icon2" className="main-info-article-container-finance-icon" />
              <h6 id="info-text4" className="main-info-article-container-finance-text">Entregas inmediatas y pactadas</h6>
            </div>

            <div className="main-info-article-container-finance">
              <FaTruckMonster id="info-icon3" className="main-info-article-container-finance-icon" />
              <h6 id="info-text5" className="main-info-article-container-finance-text">Maquinaria agricola de excelente calidad</h6>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
