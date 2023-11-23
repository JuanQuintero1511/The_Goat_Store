import React from "react";
import './Home.css'
import img1 from '../../Profile/Home4.png'
import { Info } from "./Info";
import { Catalogo } from "../Catalogo/Catalogo";
import { Footer } from "../Footer/Footer";
import {Contacto} from '../Contacto/Contacto'
import { Final } from "../Final/Final";

export const Home = () => {
    return (
        <header>
            <div className="Home">
                <div>
                    <img src={img1} alt=""  className="mi-clase"/>
                </div>
                <div className="home__info">
                    <Info />
                </div>

                <div className="home__catalogo">
                    <Catalogo />
                </div>

                <div>
                    <Footer />
                </div>

                <div className="home__contacto">
                    <Contacto />
                </div>

                <div className="home__final">
                    <Final />
                </div>
            </div>
        </header>
    )
}