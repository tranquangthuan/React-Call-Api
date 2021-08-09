import React from "react";
import "./../../App.css";
import * as Action from "../../actions/index";
import { connect } from "react-redux";

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      status: "",
    };
  }

  componentDidMount = () => {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      var product = nextProps.product;
      this.setState({
        id: product.id,
        name: product.name,
        price: product.price,
        status: product.status,
      });
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (target.type === "checkbox") {
      value = target.checked;
    }
    this.setState({ [name]: value });
  };

  onSave = (event) => {
    event.preventDefault();
    var { history } = this.props;
    var { id } = this.state;

    if (id) {
      // callApi(`products/${id}`, "PUT", this.state).then((res) => {
      //   history.goBack();
      // });
      this.props.onUpdateProduct(this.state);
      history.goBack();
    } else {
      this.props.onAddProduct(this.state);
      history.goBack();
    }
  };

  render() {
    var { name, price, status } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input field"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Input field"
              name="price"
              value={price}
              onChange={this.onChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={status}
              value={status}
              onChange={this.onChange}
            />
            <label className="form-check-label">Con Hang</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mr-10"
            onClick={this.onSave}
          >
            Save
          </button>

          <a className="btn btn-info" href="/product-list" role="button">
            Back
          </a>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(Action.addProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(Action.getProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(Action.updateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
