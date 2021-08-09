import React, { ReactElement, useState } from 'react';

export default function Contador(): ReactElement {

    const [contador, setContador] = useState(0);

    const handleButtonPress = ( numero:number ):void => {
        setContador(contador + numero);
    }

    return (
        <div className="container">
            <h2>contador</h2>

            <p>valor: {contador}</p>

            <button
            onClick={ () => handleButtonPress(1) } 
            type="button" 
            className="btn btn-success m-2">
            +1
            </button>

            <button
            onClick={ () => handleButtonPress(2) } 
            type="button" 
            className="btn btn-success m-2">
            +2
            </button>

            <button
            onClick={ () => setContador(0) } 
            type="button" 
            className="btn btn-danger m-2">
            Reset
            </button>

        </div>
    )
}
