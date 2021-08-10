import React, { useState, useEffect, useRef } from 'react'

/* otra opcion
type TimerArgs = {
    milisegundos:number,
    segundos?:number
}
*/

interface TimerArgs {
    milisegundos:number,
    segundos?:number
}
//tambien se puede poner: "export const Timer =( {milisegundos}:TimerArgs ) => {"
export const Timer =( {milisegundos}:TimerArgs ) => {
//export const Timer = ( args:TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);

    // crea una referencia que, sin importar cuantas veces reconstruya el 
    // useeffect, siempre se mantiene en memoria
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        /*
        if(ref.current){
            clearInterval(ref.current);
        }
        la linea de abajo hace lo mismo que este if*/
        ref.current && clearInterval(ref.current);

        ref.current = setInterval( () => setSegundos ( s => s + 1) , milisegundos );
    }, [milisegundos])//cada vez que cambia milisegundos se recarga useEffect y sin useReft se empezarian a acumular tiempos

    return (
        <div>
            <h3>Timer: <small>{ segundos }</small> </h3>
        </div>
    )
}
