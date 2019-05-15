import React from "react";

import './ProductTable.css';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        let data = this.props.data;
        let categories = new Set();
        let rows = [];
        
        data.forEach((item) => {    // create product/category rows
            if (this.props.inStockOnly && !item.stocked || this.props.filterText !== "" && item.name.indexOf(this.props.filterText) === -1) {    // only display those in stock
                return;
            }

            if (!categories.has(item.category)) { 
                // category not yet seen, create category row
                categories.add(item.category);
                rows.push(
                    <ProductCategoryRow category={item.category} key={item.category}></ProductCategoryRow>
                );
            } 
            
            // add product item row
            rows.push(
                <ProductRow item={item} key={item.name}></ProductRow>
            )            
        });

        return (
            <table className="ProductTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;