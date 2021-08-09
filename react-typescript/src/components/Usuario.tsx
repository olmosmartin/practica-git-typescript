import React, { ReactElement, useState } from 'react'

interface Usuario {
    id:string;
    nombre:string;
}

const usuarioInicial: Usuario = {
    id:'0',
    nombre:"default"
};

export default function Usuario(): ReactElement {

    const [usuario, setUsuario] = useState<Usuario>(usuarioInicial);

    const login = () => {
        setUsuario({
            id:'asd123',
            nombre: 'Nombre Completo'
        });
    }

    return (
        <div className="container">
            <p> usuario</p>

            <button 
            className="btn btn-primary"
            onClick={login}>
                login
            </button>

            <pre>{ JSON.stringify(usuario) }</pre>
        </div>
    )
}
