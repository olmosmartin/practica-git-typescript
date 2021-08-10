import React, { useReducer } from 'react'

//estado inicial
const estadoInicial = {
    contador: 0,
}

//acciones
type accionType = 
    | {type: 'incrementar'}
    | {type: 'decrementar'}
    | {type: 'custom', payload:number};


const contadorReducer = ( state: typeof estadoInicial, accion:accionType ) => {

    switch (accion.type) {
        case 'incrementar':
            return {
                //esto rompe la referencia a state y no lo modifica, devuelve uno nuevo
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                //esto rompe la referencia a state y no lo modifica, devuelve uno nuevo
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                //esto rompe la referencia a state y no lo modifica, devuelve uno nuevo
                ...state,
                contador: state.contador = accion.payload
            }
    
        default:
            return state;
    }

}

export const ContadorRedu = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, estadoInicial);

    return (
        <div>
            <h4>Contador reducer: { contadorState.contador } </h4>

            <button 
            className="btn btn-success"
            onClick={() => dispatch( {type: 'incrementar'} )}
            >
            +1
            </button>

            <button 
            className="btn btn-success"
            onClick={() => dispatch( {type: 'decrementar'} )}
            >
            -1
            </button>

            <button 
            className="btn btn-success"
            onClick={() => dispatch( {type: 'custom', payload: 100} )}
            >
            100
            </button>

        </div>
    )
}
