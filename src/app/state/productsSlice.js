import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    name: 'TRACTORES',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220318014607-mini.png',
        id: '1'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        id: '2'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318020623-mini.png',
        id: '3'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022112-mini.png',
        id: '4'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318021751-mini.png',
        id: '5'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022322-mini.png',
        id: '6'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022635-mini.png',
        id: '7'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220905043005-mini.png',
        id: '8'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318014759-mini.png',
        id: '9'
      }
    ]
  },
  {
    name: 'COSECHADORAS',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        id: '10'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318023619-mini.png',
        id: '11'
      }
    ]
  },
  {
    name: 'MIXERS',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220318052721-mini.png',
        id: '12'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318052930-mini.png',
        id: '13'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318051258-mini.png',
        id: '14'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318051510-mini.png',
        id: '15'
      }
    ]
  }
]

export const productsSlice = createSlice({
  name: "products",
  initialState: products
});

export default productsSlice.reducer;