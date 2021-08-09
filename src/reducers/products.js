  import * as Types from "../constants/ActionTypes";
  var initiaState = [];

  const products = (state = initiaState, action) => {
    var index = -1;
    var { product } = action;
    switch (action.type) {
      case Types.FETCH_PRODUCTS:
        state = action.products;
        return [...state];
      case Types.DELETE_PRODUCTS:
        index = findIndex(state, action.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
        return [...state];

      case Types.ADD_PRODUCTS:
        state.push(action.product);
        return [...state];

      case Types.EDIT_PRODUCTS:
        state.push(action.product);
        return [...state];

      case Types.UPDATE_PRODUCTS:
        console.log(action);
        index = findIndex(state, product.id);
        state[index] = product;
        return [...state];
      default:
        return [...state];
    }
  };

  var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        return (result = index);
      }
    });

    return result;
  };

  export default products;
