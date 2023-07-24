import Product from '../../components/Product/Product';
import React from 'react';

import './products.css';
import { useSelector } from 'react-redux';

export default function Products() {
  const products = useSelector(state => state.products)

  return (
    <main className='product'>
      <Product
        data = { products }
      />
    </main>
  )
}
