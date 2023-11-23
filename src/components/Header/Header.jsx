import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";

export const Header = () => {

    let navigate = useNavigate()
    return (
        <header>
            <div class="wrapper">
                <div class="logo"><a href="/" onClick={() => navigate('/home')}>The Goat</a></div>
                
                <nav>
                    <a href="Colecciones" onClick={() => navigate('/colecciones')}>Colecciones</a>
                    <a href="Historia">Nuestra Historia</a>
                    <a href="Contact">Contacto</a>
                </nav>
            </div>
	</header>
    )
}