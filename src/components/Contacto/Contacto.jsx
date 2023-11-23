import React from "react";
import './Contacto.css'


export const Contacto = () => {
    return (
        <div className="contacto">
            <div className="contacto__title">
                MANTENTE EN CONTACTO
            </div>

            <div className="contacto__text">
                Regístrate para noticias de nuevos productos, 
                promociones exclusivas + 
                eventos
            </div>

            <div class="form-group mx-auto">
                <input type="email" class="form-control-lg border-0" placeholder="Ingresa tu email"/>
                <button className="boton">Suscribirme</button>
            </div>
        </div>
    )
}