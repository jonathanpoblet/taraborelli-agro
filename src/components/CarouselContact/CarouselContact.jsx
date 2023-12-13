import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './carouselContact.css';


// eslint-disable-next-line react/prop-types
export default function CarouselContact({ src1, src2, src3 }) {
  return (
    <Carousel className='carouselContact' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ src1 }
          alt="Primer slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ src2 }
          alt="Segundo slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ src3 }
          alt="Tercer slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

