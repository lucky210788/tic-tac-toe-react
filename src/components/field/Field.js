import React, {Component} from 'react';
import Cell from '../cell/Cell'
import './field.css'

export default class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['', '', '', '', '', '', '', '', ''],
            isX: true,
            results: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
    }

    handleSetValue = (index) => {
        let values = this.state.values;
        let isX = this.state.isX;

        isX ? values[index] = 'X' : values[index] = 'O';
        isX = !isX;
        this.setState({
            values,
            isX
        });
    };

    determinationOfWinner = () => {
        const results = this.state.results;

    };

    render() {
        const {values, isX} = this.state;

        const cell = values.map((value, index) => {
            return (
                <Cell
                    valueCell={value}
                    key={index}
                    handleSetValue={() => this.handleSetValue(index)}/>
            )
        });

        return (
            <React.Fragment>
                <h3 className="text-field">Ход {isX ? 'X' : 'O'}</h3>
                <div className="field-wrap">
                    {cell}
                </div>
                <h3 className="text-field">Победитель {isX ? 'X' : 'O'}</h3>
            </React.Fragment>
        );
    }
}
