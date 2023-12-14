import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../app/state/globalSlice';

// eslint-disable-next-line react/prop-types
export default function LookingCard({ path,page,img,title }) {
  const dispatch = useDispatch();
  return (
    <Link
        to={ path } 
        
        onClick={() => dispatch(setActivePage(page))}> 
        <div>
            <img src={ img } alt='Home 1' />
            <p style={{marginBottom: 0}}>{ title }</p>
        </div>
    </Link>
  )
}
