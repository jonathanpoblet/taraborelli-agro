import React from 'react';
import './product.css';

export default function Product({data}) {
  return (
    <section className='product-list fade-in'>
        {
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
                          <img className='product-list-photos-img' src={ d.img } alt={ da.name } key={ index } />
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
