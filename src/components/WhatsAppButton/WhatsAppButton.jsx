import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

import './whatsAppButton.css';

export default function WhatsAppButton() {
    const handleClick = () => {
        window.open('https://api.whatsapp.com/send?phone=1130565913&text=Hola,%20¿en%20qué%20puedo%20ayudarte?', '_blank');
    };

    return (
        <BsWhatsapp data="ture" className="whatsapp-button" onClick={handleClick}></BsWhatsapp>
    )
}
