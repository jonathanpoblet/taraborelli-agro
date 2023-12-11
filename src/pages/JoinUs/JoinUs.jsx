import { FaHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineBiotech } from "react-icons/md";
import './joinUs.css';

export default function JoinUs() {
  const showFileName = (event) => {
    const input = event.target;
    const output = document.getElementById('file-name');
    output.innerHTML = 'Archivo: ' + input.files[0].name;
  };
  return (
    <main className='join'>
      <section className="join-info">
        <article className="join-info-article">
          <h1>Potenciá tu talento en nuestro equipo</h1>

          <p>¡Bienvenido a <b>Taraborelli Agro!</b> Estamos emocionados de que estés considerando unirte a nosotros para experimentar el mundo innovador de la maquinaria agrícola de vanguardia. Al sumarte a nuestra comunidad, te convertirás en parte de una red apasionada de agricultores y profesionales comprometidos con la excelencia en el campo.</p>
          <br></br>
          <p>No te pierdas la oportunidad de formar parte de nuestra comunidad en constante crecimiento. Ingresa tu cv ahora y únete a nosotros en el emocionante viaje hacia un futuro agrícola más eficiente, sostenible y exitoso. ¡Estamos ansiosos por tenerte a bordo!</p>

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
            <label
              style={{
                backgroundColor: '#004994',
                marginTop: '25px',
                marginLeft: '10px',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              CV
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={showFileName}
              />
            </label>
            <br></br>
            <p id="file-name" style={{marginBottom: 0, textAlign: 'start', marginLeft: 10}}></p>

            <button onClick={() => sendForm()} className='join-info-article-form-button' type='button'>ENVIAR</button>
          </form>
        </article>
      </section>
    </main>
  )
}
