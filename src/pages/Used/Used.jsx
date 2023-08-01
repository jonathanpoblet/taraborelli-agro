import Product from '../../components/Product/Product';
import React from 'react';

import './used.css';
import { useSelector } from 'react-redux';

export default function Used() {
  const products = useSelector(state => state.products)

  return (
    <main className='product'>
      <Product
        data = { products }
      />
    </main>
  )
}
