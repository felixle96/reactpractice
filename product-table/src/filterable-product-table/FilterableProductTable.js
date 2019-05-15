import React from "react";

import './FilterableProductTable.css';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "ball",
            inStockOnly: true
        }

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onInStockChange = this.onInStockChange.bind(this);
    }

    onFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    onInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <h3>FilterableProductTable</h3>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.onFilterTextChange}
                    onInStockChange={this.onInStockChange}>
                </SearchBar>
                <ProductTable
                    data={this.props.data}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}>
                </ProductTable>
            </div>
        );
    }
}

export default FilterableProductTable;