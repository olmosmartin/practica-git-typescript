import React, { ReactElement, useState } from 'react'
import { Timer } from './Timer';

export default function TimerPadre(): ReactElement {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <div className="container">
            <span> milisegundos { milisegundos } </span>
            <br></br>
            <button 
            className="btn btn-success"
            onClick={() => setMilisegundos(1000)}
            >
                1000
            </button>
            <button 
            className="btn btn-success"
            onClick={() => setMilisegundos(2000)}
            >
                2000
            </button>
            <Timer milisegundos={milisegundos}/>
        </div>
    )
}
