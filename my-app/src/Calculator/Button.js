import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button className="calculator__button">{this.props.buttonValue}</button>
        );
    }
}

export default Button;