import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './carouselDetail.css';


// eslint-disable-next-line react/prop-types
export default function CarouselDetail({ srcs }) {
  return (
    <Carousel data-bs-theme="dark" className='carouselDetail'>
      {
        srcs.map((src,index) => {
          return (
          <Carousel.Item>
            <img
              key={ index }
              className="d-block carouselDetail-img"
              src={ src }
              alt="Slide"
            />
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

