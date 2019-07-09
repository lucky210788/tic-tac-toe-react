import React from 'react';
import './cell.css';

function Cell({valueCell, handleSetValue}) {
    return (
        <button
        type="button"
        className="cell"
        onClick={handleSetValue}
        disabled={valueCell ? true : false}>
            {valueCell}
        </button>
    );
}

export default Cell;