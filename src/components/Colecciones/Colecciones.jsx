import React from "react";
import './Colecciones.css'
import colecciongoats from '../../camisas/CamisaOversize1.png'
import { Final } from "../Final/Final";
import { useNavigate } from "react-router-dom";

export const Colecciones = () => {
    let navigate = useNavigate()
    return (
        <div>
            <div className="colecciones__title">
                COLECCIONES
            </div>
            
            <div className="colecciones__img">
                <a href="Goats" onClick={() => navigate('/colecciones')}>
                    <img src={colecciongoats} alt="" className="coleccion"/>
                </a>
            </div>

            <div className="colecciones__subtitle">
                PRJCT: "GOATS"
            </div>

            <div>
                <Final />
            </div>
        </div>
    )
}