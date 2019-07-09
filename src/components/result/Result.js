import React from 'react';
import './result.css'

export default function Result({winner, handleReset}) {
    return (
        <React.Fragment>
            <h1 className="text-field">{winner}</h1>
            <h3 className="text-field text-upper">{winner === 'XO' ? 'Ничья' : 'Победитель'}</h3>
            <button
                className="btn-reset"
                onClick={() => handleReset()}>Начать заново
            </button>
        </React.Fragment>
    );
}
