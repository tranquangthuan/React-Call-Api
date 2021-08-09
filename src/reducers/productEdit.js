import * as Types from "../constants/ActionTypes";
var initiaState = {};

const productEdit = (state = initiaState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCTS:
      return action.product;
    default:
      return state;
  }
};

export default productEdit;
