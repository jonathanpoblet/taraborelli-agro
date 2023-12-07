import { FaHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineBiotech } from "react-icons/md";
import './joinUs.css';

export default function JoinUs() {
  return (
    <main className='join'>
      <section className="join-info">
        <article className="join-info-article">
          <h1>Potenciá tu talento en nuestro equipo</h1>

          <div className="join-info-article-container">
            <div className="join-info-article-container-finance">
              <IoIosPeople className="join-info-article-container-finance-icon" />                      
              <h6 className="join-info-article-container-finance-text">Trabajo en equipo</h6>
            </div>

            <div className="join-info-article-container-finance">
              <MdOutlineBiotech id="info-icon2" className="join-info-article-container-finance-icon" />
              <h6 className="join-info-article-container-finance-text">Innovación</h6>
            </div>

            <div className="join-info-article-container-finance">
              <FaHandshake className="join-info-article-container-finance-icon" />
              <h6 className="join-info-article-container-finance-text">Compromiso</h6>
            </div>
          </div>

          <form className='join-info-article-form'>
            <input id='nombre' className='join-info-article-form-input' type='text' placeholder='Nombre'/>
            <input id='apellido' className='join-info-article-form-input' type='text' placeholder='Apellido'/>
            <input id='tel' className='join-info-article-form-input' type='text' placeholder='Teléfono'/>
            <input id='email' className='join-info-article-form-input' type='text' placeholder='Correo'/>
            <input id='localidad' className='join-info-article-form-input' type='text' placeholder='Localidad'/>
            <textarea id='mensaje' className='join-info-article-form-textarea' placeholder='Mensaje'>

            </textarea>
            <button onClick={() => sendForm()} className='join-info-article-form-button' type='button'>ENVIAR</button>
          </form>
        </article>
      </section>
    </main>
  )
}
