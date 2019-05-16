import React from "react";

import Button from "./Button";

class Keypad extends React.Component {
    render() {
        let cols = this.props.cols;
        let buttons = [];

        this.props.buttons.forEach((buttonValue, index) => {
            // add a line break if needed
            if (index !== 0 && index % cols === 0) {
                buttons.push(<br key={'br-' + index}></br>)
            };

            // add button to list of buttons to render
            buttons.push(
                <Button key={index} buttonValue={buttonValue}></Button>
            )
        });

        return (
            <div>
                {buttons}
            </div>
        )
    }
}

export default Keypad;