import axios from "axios";

export const addCart = (product) => {
  return {
    type: "addToCart",
    data: product,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    axios.get("/products.json").then((res) => {
      dispatch({
        type: "getProducts",
        data: res.data,
      });
    });
  };
};
