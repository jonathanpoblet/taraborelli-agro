import Product from '../../components/Product/Product';
import React from 'react';

import './products.css';

export default function Products() {
  const data = [
    {
      name: 'TRACTORES',
      products: [
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        }
      ]
    },
    {
      name: 'COSECHADORAS',
      products: [
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        }
      ]
    }
  ]

  return (
    <main className='product'>
      <Product
        data = { data }
      />
    </main>
  )
}
