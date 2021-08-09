import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Action from "../../actions/index";

class ProductListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllProduct();
  }

  render() {
    var { products } = this.props;

    return (
      <div>
        <Link to="product/add">Add new Product</Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }

    return result;
  };

  onDelete = (id) => {
    this.props.deleteProductRequest(id);
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProduct: () => {
      dispatch(Action.fetchAllProduct());
    },
    deleteProductRequest: (id) => {
      dispatch(Action.deleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
