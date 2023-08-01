import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import './detail.css';

export default function Detail() {

  const sendForm = () => {
    let form = {
      nombre: "",
      email: "",
      tel: "",
      modelo: "",
    };

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const modelo = document.getElementById('modelo').value;
    const mensaje = document.getElementById('mensaje').value;

    if(!nombre) return Swal.fire({title: 'Ingresa un nombre', confirmButtonText: 'OK',confirmButtonColor: '#000',  customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!email) return Swal.fire({title: 'Ingresa un email', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!tel) return Swal.fire({title: 'Ingresa un telefono', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!modelo) return Swal.fire({title: 'Ingresa el modelo que buscas', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!mensaje) return Swal.fire({title: 'Ingresa su consulta', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});

    if(nombre) form = {...form, nombre}
    if(email) form = {...form, email}
    if(tel) form = {...form, tel}
    if(modelo) form = {...form, modelo}
    if(mensaje) form = {...form, mensaje}

    Swal.fire({title: 'Enviando...', showCloseButton: 'false' ,confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});

    setTimeout(() => {
      Swal.fire({title: 'Formulario enviado con exito', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
      setTimeout(() => {
        location.reload();
      }, 1500);
    }, 1500);

  }
  
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const id = urlParams.get('id');
  const products = useSelector(state => state.products);
  let product;
  
  for(let i = 0; i < products.length ; i++){
    const prod = products[i].products.find(prod => prod.id == id);
    if(prod) product = prod;
  }
  
  return (
    <main className='detail'>
      <section className='detail-header'>
        <h1 className='detail-header-title'>{product.name}</h1>
      </section>

      <section className='detail-principal'>
        <img className='detail-principal-img' src={ product.img } alt={ product.name } />
        <form className='detail-principal-form'>
          <h3 className='detail-principal-form-title'>CONSULTANOS</h3>
          <input id='nombre' className='detail-principal-form-input' type='text' placeholder='Nombre y Apellido'/>
          <input id='email' className='detail-principal-form-input' type='text' placeholder='Email'/>
          <input id='tel' className='detail-principal-form-input' type='text' placeholder='Teléfono'/>
          <input id='modelo' className='detail-principal-form-input' type='text' value={ product.name } readOnly/>
          <textarea id='mensaje' className='detail-principal-form-textarea' placeholder='Mensaje'>

          </textarea>
          <button onClick={() => sendForm()} className='detail-principal-form-button' type='button'>ENVIAR</button>
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
