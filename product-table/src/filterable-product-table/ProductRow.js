import React from "react";

class ProductRow extends React.Component {
    render() {
        const item = this.props.item;
        const name = item.stocked ? item.name : (
            <span style={{color: "red"}}>
                {item.name}
            </span>
        )
        
        return (
            <tr>
                <td>{name}</td>
                <td>{item.price}</td>
            </tr>
        );
    }
}

export default ProductRow;