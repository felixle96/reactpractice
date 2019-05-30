import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button className="calculator__button" onClick={(e) => this.props.onButtonPress(this.props.buttonValue)} >{this.props.buttonValue}</button>
        );
    }
}

export default Button;