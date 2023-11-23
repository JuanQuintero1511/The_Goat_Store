import React from "react";
import './Info.css'
import { useNavigate } from "react-router-dom";


export const Info = () => {
    let navigate = useNavigate()
    return (
        <div className="informacion">
            <div className="home__info">
                Minimalismo Impecable
            </div>
            <div>
                <p>Prendas esenciales para reforzar tu estilo</p>
            </div>
            <div className="link__compra">
                <a href="Colecciones" onClick={() => navigate('/colecciones')} className="home__link">Comprar</a>
            </div>
        </div>
    )
}