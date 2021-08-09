import * as Types from "../constants/ActionTypes";
import apiCaller from "../utils/apiCaller";

export const fetchAllProduct = () => {
  return (dispatch) => {
    return apiCaller("products", "GET", null).then((res) => {
      dispatch(fetchProduct(res.data));
    });
  };
};

export const fetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products: products,
  };
};

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const deleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id: id,
  };
};

export const addProductRequest = (product) => {
  return (dispatch) => {
    return apiCaller("products", "POST", product).then((res) => {
      dispatch(addProduct(res.data));
    });
  };
};

export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product: product,
  };
};

export const getProductRequest = (id) => {
  return (dispatch) => {
    return apiCaller(`products/${id}`, "GET", null).then((res) => {
      dispatch(getProduct(res.data));
    });
  };
};

export const getProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCTS,
    product: product,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) => {
    return apiCaller(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(updateProduct(res.data));
    });
  };
};

export const updateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCTS,
    product: product,
  };
};
