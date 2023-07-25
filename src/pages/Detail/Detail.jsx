import { useSelector } from 'react-redux';
import './detail.css';

export default function Detail() {
  
  const id = window.location.search.slice(4);
  const products = useSelector(state => state.products);
  let product;
  
  for(let i = 0; i < products.length ; i++){
    const prod = products[i].products.find(prod => prod.id == id);
    if(prod) product = prod;
  }
  
  console.log(product)

  return (
    <main className='detail'>
      <section className='detail-header'>
        <h1 className='detail-header-title'>{product.name}</h1>
      </section>

      <section className='detail-principal'>
        <img className='detail-principal-img' src={ product.img } alt={ product.name } />
        <form className='detail-principal-form'>
          <h3 className='detail-principal-form-title'>CONSULTANOS</h3>
          <input className='detail-principal-form-input' type='text' placeholder='Nombre y Apellido'/>
          <input className='detail-principal-form-input' type='text' placeholder='Email'/>
          <input className='detail-principal-form-input' type='text' placeholder='Teléfono'/>
          <input className='detail-principal-form-input' type='text' value={ product.name } readOnly/>
          <textarea className='detail-principal-form-textarea' placeholder='Mensaje'>

          </textarea>
          <button className='detail-principal-form-button' type='button'>ENVIAR</button>
        </form>
      </section>

      <section className='detail-info'>
        <h3 className='detail-info-title'>Descripción</h3>
        <p className='detail-info-text'>
          { product.info }
        </p>

        <p className='detail-info-text'>
          { product.detail }
        </p>
      </section>
    </main>
  )
}
