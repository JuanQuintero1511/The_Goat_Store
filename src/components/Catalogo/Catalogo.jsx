import React from "react";
import './Catalogo.css'
import oversize from '../../camisas/CamisaOversize1.png'
import basica from '../../camisas/CamisaBasica2.png'
import buzo from '../../camisas/Buzo.png'
import { useNavigate } from "react-router-dom";


export const Catalogo = () => {
    let navigate = useNavigate()
    return (
        <div className="catalogo">
            <div>
                <img src={oversize} alt="" className="oversize"/>
                <div className="over__title">Oversize "Disponible"</div>
                <a href="Goats" onClick={() => navigate('/colecciones')} className="over__link">Comprar</a>
            </div>

            <div>
                <img src={buzo} alt="" className="oversize"/>
                <div className="over__title">Buzo "Muy pronto"</div>
                {/* <a href="#" className="over__link">Comprar</a> */}
            </div>

            <div>
                <img src={basica} alt="" className="oversize"/>
                <div className="over__title">Basica "Muy pronto"</div>
                {/* <a href="#" className="over__link">Comprar</a> */}
            </div>

        </div>
    )
}