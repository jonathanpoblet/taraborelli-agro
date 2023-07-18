import Product from '../../components/Product/Product';
import React from 'react';

import './used.css';

export default function Used() {
  const data = [
    {
      name: 'TRACTORES',
      products: [
        {
          img: 'https://dealers.rewebmkt.com/images/20220318014607-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318020623-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318022112-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318021751-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318022322-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318022635-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220905043005-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318014759-mini.png',
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
          img: 'https://dealers.rewebmkt.com/images/20220318023619-mini.png',
        }
      ]
    },
    {
      name: 'MIXERS',
      products: [
        {
          img: 'https://dealers.rewebmkt.com/images/20220318052721-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318052930-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318051258-mini.png',
        },
        {
          img: 'https://dealers.rewebmkt.com/images/20220318051510-mini.png',
        }
      ]
    }
  ]
  return (
    <main className='used'>
      <Product
        data = { data }
      />
    </main>
  )
}
