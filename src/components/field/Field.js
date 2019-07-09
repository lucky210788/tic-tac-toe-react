import React, {Component} from 'react';
import Cell from '../cell/Cell'
import './field.css'

export default class Field extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {values, isX, handleSetValue} = this.props;

        const cell = values.map((value, index) => {
            return (
                <Cell
                    valueCell={value}
                    key={index}
                    handleSetValue={() => handleSetValue(index)}/>
            )
        });

        return (
            <React.Fragment>
                <h3 className="text-field">Ход {isX ? 'X' : 'O'}</h3>
                <div className="field-wrap">
                    {cell}
                </div>
            </React.Fragment>
        );
    }
}
