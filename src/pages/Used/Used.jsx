import CarouselUsed from '../../components/CarouselUsed/CarouselUsed';
import './used.css';

export default function Used() {
  return (
    <main className='used'>
      <CarouselUsed src1='./assets/used/usados1.png' src2='./assets/used/usados2.png' src3='./assets/used/usados3.png' src4='./assets/used/usados4.png' />
      <div className='used-info'>
        <h1>Descubre Nuestra Selección de Maquinaria Agrícola Usada</h1>
        <br></br>
        <p>
          En <b style={{ color: '#01274d' }}>Taraborelli Agro</b>, entendemos la importancia de contar con equipos agrícolas confiables y eficientes para maximizar la productividad de tu explotación.
          Nuestra sección de maquinaria agrícola usada ofrece una selección cuidadosamente curada de tractores, cosechadoras y equipos forrajeros que han sido rigurosamente inspeccionados para
          garantizar su rendimiento óptimo.Contamos con una gran variedad de <b style={{ color: '#01274d' }}>tractores</b>, <b style={{ color: '#01274d' }}>cosechadoras</b> y{' '}
          <b style={{ color: '#01274d' }}>forrajes</b>, para que puedas elegir la maquina agricola que necesites.
        </p>
        <a className='btn btn-dark' href='https://www.agroads.com.ar/e/taraborelli-agro-/'>
          Ver Usados
        </a>
        <br></br>
      </div>
    </main>
  );
}
