import { combineReducers } from "redux";
import productEdit from "./productEdit";
import products from "./products";

const appReducers = combineReducers({
  products: products,
  product: productEdit,
});
export default appReducers;
