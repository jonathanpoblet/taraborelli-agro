import React from 'react';
import './contactSection.css';

export default function ContactSection() {
  return (
    <section className='contactSection'>
      <article className='contactSection-article'>
        <h2 className='contactSection-article-title'>CONTACTANOS</h2>
        <h3>No dudes en escribirnos</h3>
        <p>Atención personalizada en todo momento para que puedas accedar a tu maquinaria agricola ya mismo</p><br></br>
        <p>Atención personalizada en todo momento para que puedas accedar a tu maquinaria agricola ya mismo</p><br></br>
        <p>Atención personalizada en todo momento para que puedas accedar a tu maquinaria agricola ya mismo</p>

      </article>
      
      <article className='contactSection-article2'>
        <h3 className='contactSection-article2-title'>Envianos un mensaje</h3>
        <form className='contactSection-article2-form'>
          <input className='contactSection-article2-form-input' type='text' placeholder='Nombre'/>
          <input className='contactSection-article2-form-input' type='text' placeholder='Apellido'/>
          <input className='contactSection-article2-form-input' type='text' placeholder='Teléfono'/>
          <input className='contactSection-article2-form-input' type='text' placeholder='Correo'/>
          <input className='contactSection-article2-form-input' type='text' placeholder='¿Tienes Auto Usado?'/>
          <input className='contactSection-article2-form-input' type='text' placeholder='¿Qué modelo estas buscando?'/>
          <textarea className='contactSection-article2-form-textarea' placeholder='Mensaje'>

          </textarea>
          <button className='contactSection-article2-form-button' type='button'>ENVIAR</button>
        </form>
      </article>
    </section>
  )
}
