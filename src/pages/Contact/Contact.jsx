import React from 'react';
import './contact.css';
import ContactSection from '../../components/ContactSection/ContactSection';

export default function Contact() {
  return (
    <main className='contact fade-in'>
        <section className='contact-section1'>
            <img className='contact-section1-img' src='../../../public/assets/contact.png' alt='contact'/>
        </section>
        
        <ContactSection/>
    </main>
  )
}
