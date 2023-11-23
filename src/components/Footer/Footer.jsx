import React from "react";
import './Footer.css'
import logo from '../../Profile/Logo.png'


export const Footer = () => {
    return (
        <div>
            <div className="footer__title">
                The Goat
            </div>

            <div className="footer__text">
                <p>
                    Te damos la bienvenida al sitio web oficial de The Goat®, 
                    donde la atemporalidad se fusiona con lo moderno y lo clásico con lo provocador. 
                    Descubre una selección imperdible de diseños que elevarán tu estilo a otro nivel. 
                    Nuestra colección unisex ofrece camisetas y buzos que no solo destacan, 
                    sino que también encapsulan el propósito distintivo de la línea The Goat. 
                    Explora cómo cada pieza se convierte en un símbolo de autenticidad y estilo sin igual.
                </p>
            </div>

            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}