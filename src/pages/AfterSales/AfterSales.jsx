import { FaTruckMonster } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import AfterSalesCard from '../../components/AfterSalesCard/AfterSalesCard';
import './afterSales.css';

export default function AfterSales() {
  return (
    <main className='aftersales'>
      <section className='aftersales-info'>
        <div className='aftersales-info-container'>
          <h1 className='aftersales-info-container-h1'>SERVICIO POSTVENTA</h1>
          <p className='aftersales-info-container-p'>En <b>Taraborelli Agro</b>, nos enorgullece ofrecer un servicio postventa integral que respalda la inversión de nuestros clientes en maquinaria agrícola. Nuestro compromiso va más allá de la venta; estamos dedicados a proporcionar asistencia técnica especializada, mantenimiento preventivo y soluciones rápidas para garantizar el rendimiento óptimo de cada equipo.</p>
          <p className='aftersales-info-container-p'>Nuestro equipo altamente capacitado de profesionales está disponible para atender sus consultas, brindar asesoramiento personalizado y suministrar piezas de repuesto genuinas, asegurando la durabilidad y eficiencia de su maquinaria en cada temporada de cultivo. En Taraborelli Agro, la excelencia en el <b>servicio postventa</b> es un distintivo que respalda su inversión y fortalece nuestra relación a largo plazo con usted, nuestro valioso cliente.</p>
        </div>
        <img className='aftersales-info-container-img' src='./public/assets/aftersales/banner.jpg' alt='Servicio Postventa' />
      </section>

      <section className='aftersales-cards'>
        <AfterSalesCard
          icon={ <FaTools/> }
          title='Mantenimiento'
          text='Hasta el 31/12/2024 50% descuento en la mano de obra del servicio de mantenimiento para unidades adquiridas en Taraborelli agro.'
        />
        <AfterSalesCard
          icon={ <FaTruckMonster/> }
          title='Costos de viaje'
          text='Reparaciones y servicios de mantenimiento costo de viaje de los técnicos a Campo sin cargo hasta 70km de nuestra concesionaria.'
        />
        <AfterSalesCard
          icon={ <FaHand/> }
          title='Revisión'
          text='Revisión post campaña sin cargo y 10% de descuento en mano de obra y repuestos dentro de nuestro consecionario de Arrecifes.'
        />
      </section>
    </main>
  )
}
