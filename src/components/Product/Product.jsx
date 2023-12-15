import React from 'react';
import { useNavigate } from "react-router-dom";
import './product.css';

// eslint-disable-next-line react/prop-types
export default function Product({ data }) {

  const navigate = useNavigate();


  const viewDetail = (id) => {
    navigate(`../detalle?id=${id}`);
  }

  return (
    <section className='product-list fade-in'>
        {
          // eslint-disable-next-line react/prop-types
          data.map((da,index) => {
            return (
              <React.Fragment key={ index }>
                <div className='product-list-header'>
                  <h3 className='product-list-header-title'>{ da.name }</h3>
                </div>
                <div className='product-list-photos'>
                  {
                    da.products.map((d,index) => {
                      return (
                          <div onClick={ () => viewDetail(d.id)} key={ d.id } className='product-list-photos-container'>
                            <img
                              className='product-list-photos-img' 
                              src={ d.images[0] } 
                              alt={ da.name } 
                              key={ index } 
                              />
                            <p>{ d.name }</p>
                          </div>
                          )
                        })
                      }
                </div>
              </React.Fragment>
            )
          })
        }
    </section>
  )
}
