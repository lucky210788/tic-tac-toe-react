import React, {Component} from 'react';
import Field from '../field/Field';
import Result from '../result/Result';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['', '', '', '', '', '', '', '', ''],
            isX: true,
            winner: '',
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
        let {values, isX} = this.state;

        isX && values[index] === '' ? values[index] = 'X' : values[index] = 'O';
        isX = !isX;
        this.setState({
            values,
            isX
        });

        const winner = this.determinationOfWinner();

        if (winner) {
            this.setState({
                winner
            });
        }
    };

    determinationOfWinner = () => {
        let {values, results} = this.state;

        for (let i = 0; i < results.length; i++) {
            if (values[results[i][0]] === values[results[i][1]] && values[results[i][0]] === values[results[i][2]] && values[results[i][0]] !== '') {
                return values[results[i][0]];
            }
        }

        let val = 0;
        for (let j = 0; j < values.length; j++) {
            if (values[j] === '') {
                val++;
            }
        }

        if (val === 0) {
            return 'XO';
        }
    };

    handleReset = () => {
        let {values} = this.state;

        for (let i = 0; i < values.length; i++) {
            values[i] = '';
        }

        this.setState({
            values,
            winner: '',
            isX: true
        });
    };

    render() {
        const {values, isX, winner} = this.state;

        return (
            <div className="App">
                {winner ?
                    <Result winner={winner}
                            handleReset={this.handleReset}/> :
                    <Field values={values}
                           isX={isX}
                           handleSetValue={this.handleSetValue}/>}
            </div>
        );
    }
}

export default App;