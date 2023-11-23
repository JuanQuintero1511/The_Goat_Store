import React from "react";
import './Goats.css'

import HamiltonBlanco from '../../DISEÑO CAMISAS/HAMILTON FINAL/CAMISA BLANCA.png'
import HamiltonNegroColor from '../../DISEÑO CAMISAS/HAMILTON FINAL/CAMISA NEGRA COLOR.png'
import HamiltonNegro from '../../DISEÑO CAMISAS/HAMILTON FINAL/CAMISA NEGRA.png'

import MaradonaNegro from '../../DISEÑO CAMISAS/MARADONA FINAL/CAMISA NEGRA.png'
import MaradonaBlanco from '../../DISEÑO CAMISAS/MARADONA FINAL/CAMISA BLANCA.png'

import MessiBlanco from '../../DISEÑO CAMISAS/MESSI FINAL/CAMISA BLANCA.png'
import MessiNegro from '../../DISEÑO CAMISAS/MESSI FINAL/CAMISA NEGRA.png'

import { Final } from "../Final/Final";

export const Goats = () => {
    return (
        <div className="goats">
            <div className="goats__title">
                PRJCT: "GOATS"
            </div>

            <div>
                <a href="#" ><img src={HamiltonNegroColor} alt="" className="goats__img"/></a>   
                <a href="#" ><img src={HamiltonBlanco} alt="" className="goats__img1"/></a>   
                <a href="#" ><img src={HamiltonNegro} alt="" className="goats__img2"/></a>   
            </div>

            
            <div className="goats__subtitle">
                <a href="#">"HEMMERTIME" | COLOR</a> 
                <p>Unisex Premium Oversize | BLACK</p>
                <samp>$120.000 COP</samp>  
            </div>

            <div className="goats__subtitle1">
                <a href="#">"HEMMERTIME"</a> 
                <p>Unisex Premium Oversize | WHITE</p>
                <samp>$100.000 COP</samp>    
            </div>

            <div className="goats__subtitle2">
                <a href="#">"HEMMERTIME"</a> 
                <p>Unisex Premium Oversize | BLACK</p>
                <samp>$100.000 COP</samp>      
            </div>

            <div>
                <div>
                    <a href="#" ><img src={MaradonaNegro} alt="" className="goats__img"/></a>   
                    <a href="#" ><img src={MaradonaBlanco} alt="" className="goats__img1"/></a>
                    <a href="#" ><img src={MessiNegro} alt="" className="goats__img2"/></a>
                </div>

                <div className="goats__subtitle3">
                    <a href="#">"D10S"</a> 
                    <p>Unisex Premium Oversize | BLACK</p>
                    <samp>$100.000 COP</samp>  
                </div>

                <div className="goats__subtitle4">
                    <a href="#">"D10S"</a> 
                    <p>Unisex Premium Oversize | WHITE</p>
                    <samp>$100.000 COP</samp>  
                </div>

                <div className="goats__subtitle5">
                    <a href="#">"GOAT"</a> 
                    <p>Unisex Premium Oversize | WHITE</p>
                    <samp>$100.000 COP</samp>  
                </div>
            </div>

            <div>
                <div>
                    <a href="#" ><img src={MessiBlanco} alt="" className="goats__img"/></a>   
                </div>

                <div className="goats__subtitle6">
                    <a href="#">"D10S"</a> 
                    <p>Unisex Premium Oversize | BLACK</p>
                    <samp>$100.000 COP</samp>  
                </div>

            </div>

                <Final />
        </div>

        
    )
}

