import React from "react";
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  onDelete = (id) => {
    if (confirm("Ban co muon xoa hay khong ?")) {//eslint-disable-line
      this.props.onDelete(id);
    }
  };

  render() {
    var { product, index } = this.props;
    var status = product.status ? "Con Hang" : "Het Hang";
    var statusClass = product.status ? "primary" : "warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <span className={`label label-${statusClass}`}>{status}</span>
        </td>
        <td>
          <Link
            to={`product/${product.id}/edit`}
            className="btn btn-primary mr-10"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
