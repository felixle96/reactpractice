import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <div>
                <input
                    type="text" placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}>
                </input>
                <div>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}>
                    </input>
                    {" "}
                    <span>Only show products in stock</span>
                </div>
            </div>
        );
    }
}

export default SearchBar;