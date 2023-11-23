import React from "react";
import './Historia.css'
import { Final } from "../Final/Final";
import historia from '../../Profile/Historia.png'

export const Historia = () => {
    return (
        <div>
            <div className="historia__title">
                "Nuestra Historia"
            </div>

            <div className="historia__text">
                <p>
                    En un mundo donde los roles entre el trabajo, el ocio y el crecimiento personal se entrelazan, 
                    surgió la demanda de prendas deportivas capaces de acompañar el constante impulso hacia la excelencia. 
                    Es así como nació The Goat, una marca forjada desde la pasión por el movimiento y la determinación de transformar la indumentaria deportiva.
                </p>
            </div>

            <div className="historia__img">
                <img src={historia} alt="" />
                <h1>La visión</h1>
                <p>
                The Goat surgió como un sueño compartido entre apasionados del deporte, diseñadores e innovadores. 
                Su visión era cristalina: concebir prendas deportivas que no solo satisfacieran las exigencias rigurosas de los atletas contemporáneos, 
                sino que también personificaran el espíritu de la vanguardia y el estilo. 
                Creemos firmemente que la indumentaria deportiva no solo debe potenciar su rendimiento al máximo, sino también hacerle lucir y sentirse mejor.
                </p>
            </div>

              
        <div className="final">
            <Final />   
        </div>
        </div>
    )
}