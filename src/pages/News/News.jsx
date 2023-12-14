import React from 'react'

export default function News() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{width: '100%', height: '100%', marginTop: 50}} src='./public/assets/news/novedades.jpg' alt='Novedades' />
        <img style={{width: '100%', height: '100%', marginTop: 50}} src='./public/assets/news/novedades2.jpg' alt='Novedades' />
        <img style={{width: '100%', height: '100%', marginTop: 50, marginBottom: 50}} src='./public/assets/news/novedades3.jpg' alt='Novedades' />
    </main>
  )
}
