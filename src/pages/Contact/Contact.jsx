import './contact.css';
import ContactSection from '../../components/ContactSection/ContactSection';
import CarouselContact from '../../components/CarouselContact/CarouselContact';

export default function Contact() {
  return (
    <main className='contact fade-in'>
      <CarouselContact 
        src1='./assets/contact/servicio-al-cliente-1.jpg' 
        src2='./assets/contact/servicio-al-cliente-2.jpg' 
        src3='./assets/contact/servicio-al-cliente-3.jpg' 
      />
      <ContactSection/>
    </main>
  )
}
