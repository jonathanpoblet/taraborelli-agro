import React from 'react';
import { Link } from 'react-router-dom';

export default function LookingCard({ path,page,img,title }) {
  return (
    <Link
        to={ path } 
        
        onClick={() => dispatch(setActivePage(page))}> 
        <div>
            <img src={ img } alt='Home 1' />
            <p>{ title }</p>
        </div>
    </Link>
  )
}
