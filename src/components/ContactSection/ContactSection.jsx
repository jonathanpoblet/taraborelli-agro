import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './contactSection.css';

export default function ContactSection() {

  const navigate = useNavigate();

  const sendForm = () => {
    let form = {
      nombre: "",
      email: "",
      tel: "",
      modelo: "",
    };

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const usado = document.getElementById('usado').value;
    const modelo = document.getElementById('modelo').value;
    const mensaje = document.getElementById('mensaje').value;

    if(!nombre) return Swal.fire({title: 'Ingresa un nombre', confirmButtonText: 'OK',confirmButtonColor: '#000',  customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!apellido) return Swal.fire({title: 'Ingresa un apellido', confirmButtonText: 'OK',confirmButtonColor: '#000',  customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!tel) return Swal.fire({title: 'Ingresa un telefono', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!email) return Swal.fire({title: 'Ingresa un email', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!modelo) return Swal.fire({title: 'Ingresa el modelo que buscas', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
    if(!mensaje) return Swal.fire({title: 'Ingresa su consulta', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});

    if(nombre) form = {...form, nombre}
    if(apellido) form = {...form, apellido}
    if(tel) form = {...form, tel}
    if(email) form = {...form, email}
    if(usado) form = {...form, usado}
    if(modelo) form = {...form, modelo}
    if(mensaje) form = {...form, mensaje}

    Swal.fire({title: 'Enviando...', showCloseButton: 'false' ,confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});

    setTimeout(() => {
      Swal.fire({title: 'Formulario enviado con exito', confirmButtonText: 'OK',confirmButtonColor: '#000', customClass: { popup: 'custom-background', title: 'custom-title' }});
      setTimeout(() => {
        navigate(`/`);
      }, 1500);
    }, 1500);

  }


  return (
    <>
      <section className='contact-section1'>
        <img className='contact-section1-img' src='./assets/contact.png' alt='contact'/>
      </section>
      <section className='contactSection'>
        <article className='contactSection-article'>
          <h2 className='contactSection-article-title'>CONTACTANOS</h2>
          <h3>No dudes en escribirnos</h3>
          <p>Atención personalizada en todo momento para que puedas accedar a tu maquinaria agricola ya mismo.</p><br></br>
          <p>Garantizamos atención personalizada para acceder rápidamente a tu maquinaria agrícola. Tu satisfacción es nuestra prioridad.</p><br></br>
          <p>En la agricultura, la confianza es clave. Ofrecemos asesoramiento y soporte constante para que tus proyectos avancen sin contratiempos.</p>

        </article>
        
        <article className='contactSection-article2'>
          <h3 className='contactSection-article2-title'>Envianos un mensaje</h3>
          <form className='contactSection-article2-form'>
            <input id='nombre' className='contactSection-article2-form-input' type='text' placeholder='Nombre'/>
            <input id='apellido' className='contactSection-article2-form-input' type='text' placeholder='Apellido'/>
            <input id='tel' className='contactSection-article2-form-input' type='text' placeholder='Teléfono'/>
            <input id='email' className='contactSection-article2-form-input' type='text' placeholder='Correo'/>
            <input id='usado' className='contactSection-article2-form-input' type='text' placeholder='¿Tienes Auto Usado?'/>
            <input id='modelo' className='contactSection-article2-form-input' type='text' placeholder='¿Qué modelo estas buscando?'/>
            <textarea id='mensaje' className='contactSection-article2-form-textarea' placeholder='Mensaje'>

            </textarea>
            <button onClick={() => sendForm()} className='contactSection-article2-form-button' type='button'>ENVIAR</button>
          </form>
        </article>
      </section>
    </>
  )
}
