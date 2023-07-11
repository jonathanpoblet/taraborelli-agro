import React from 'react';
import './contactSection.css';

export default function ContactSection() {
  return (
    <section className='contactSection'>
      <article className='contactSection-article'>
        <h2 className='contactSection-article-title'>CONTACTANOS</h2>
        <form className='contactSection-article-form'>
          <input className='contactSection-article-form-input' type='text' placeholder='Nombre'/>
          <input className='contactSection-article-form-input' type='text' placeholder='Apellido'/>
          <input className='contactSection-article-form-input' type='text' placeholder='Teléfono'/>
          <input className='contactSection-article-form-input' type='text' placeholder='Correo'/>
          <select className='contactSection-article-form-select'>
            <option value='Asunto: Repuestos'>
              Asunto: Repuestos
            </option>
            <option value='Asunto: Servicios'>
              Asunto: Servicios
            </option>
            <option value='Asunto: Ventas'>
              Asunto: Ventas
            </option>
            <option value='Asunto: RRHH'>
              Asunto: RRHH
            </option>
          </select>
          <textarea className='contactSection-article-form-textarea' placeholder='Mensaje'>

          </textarea>
          <button className='contactSection-article-form-button' type='button'>ENVIAR</button>
        </form>
      </article>



      <article className='contactSection-article2'>
        <h3>¿Querés trabajar con nosotros?</h3>
        <p>Envianos tu Curriculum Vitae a rrhh@gkelly.com.ar o adjuntalo a continuación</p>
        <input type='file' />
        <button type='button'>ENVIAR</button>
        <p>Seguinos en nuestras redes sociales</p>
      </article>
    </section>
  )
}
