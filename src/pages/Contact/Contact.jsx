import './contact.css';
import ContactSection from '../../components/ContactSection/ContactSection';
import CarouselComponent from '../../components/Carousel/Carousel';

export default function Contact() {
  return (
    <main className='contact fade-in'>
      <CarouselComponent 
        src1='../../../public/assets/contact/servicio-al-cliente-1.jpg' 
        src2='../../../public/assets/contact/servicio-al-cliente-2.jpg' 
        src3='../../../public/assets/contact/servicio-al-cliente-3.jpg' 
      />
      <ContactSection/>
    </main>
  )
}
