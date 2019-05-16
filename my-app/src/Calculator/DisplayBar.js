import React from "react";

class DisplayBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleDisplayBarChange = this.handleDisplayBarChange.bind(this);
    }

    handleDisplayBarChange(e) {
        this.props.onDisplayBarChange(e.target.value);
    }

    render() {
        return (
            <div className="calculator__display-bar">
                <input type="text" value={this.props.displayText}
                    onChange={this.handleDisplayBarChange}>
                </input>
            </div>
        )
    }
}

export default DisplayBar;