import React from "react";

import './Calculator.css';
import DisplayBar from "./DisplayBar";
import Keypad from "./Keypad";

const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', 'x',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

class Calculator extends React.Component {
    constructor(props) {
        super();
        this.state = {
            displayValue: ""
        }

        this.onDisplayBarChange = this.onDisplayBarChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onDisplayBarChange(displayValue) {
        this.setState({
            displayValue: displayValue
        });
    }

    onButtonPress(buttonValue) {
        console.log('buttonValue: ', buttonValue);

        this.setState((state) => {
            return {
                displayValue: state.displayValue + buttonValue
            }
        });
    }

    render() {
        console.log('displayValue: ', this.state.displayValue);
        if (this.state.displayValue.endsWith('7')) {
            throw new Error("I pressed 7!");   
        }

        return (
            <div className="calculator">
                <DisplayBar onDisplayBarChange={this.onDisplayBarChange}
                    displayValue={this.state.displayValue}>
                </DisplayBar>
                <Keypad buttons={buttons} cols="4" onButtonPress={this.onButtonPress}></Keypad>
            </div>
        );
    }
}

export default Calculator;