const initialState = {
  products: [],
  cart: [],
};

export const appReducer = (state = initialState, action) => {
  if (action.type === "addToCart") {
    return {
      ...state,
      cart: [...state.cart, action.data],
    };
  }
  if (action.type === "getProducts") {
    return {
      ...state,
      products: action.data,
    };
  } else {
    return state;
  }
};
