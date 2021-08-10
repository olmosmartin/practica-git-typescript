import React, { ReactElement } from 'react';
import TimerPadre from '../components/TimerPadre';
import { ContadorRedu } from '../components/ContadorRedu';

export default function Inicio(): ReactElement {
    return (
        <div className="container">
            <TimerPadre/>
            <ContadorRedu/>
        </div>
    )
}
