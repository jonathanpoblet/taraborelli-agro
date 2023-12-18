import './afterSalesCard.css';

// eslint-disable-next-line react/prop-types
export default function AfterSalesCard({ icon, title, text }) {
    const handleClick = () => {
        window.open('https://api.whatsapp.com/send?phone=1130565913&text=Hola,%20quiero%20consultar%20por%20los%20servicios%20de%20postventa!', '_blank');
    };
    return (
        <div className='aftersales-cards-card'>
            { icon }
            <h2>{ title }</h2>
            <p>{ text }</p>
            <button onClick={ handleClick }>ACCEDER AL DESCUENTO</button>
        </div>
    )
}
