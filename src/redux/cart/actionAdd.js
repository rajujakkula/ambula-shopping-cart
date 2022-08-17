import { addCart } from "./actionTypeAdd";

export const addToCart = (product) => {
  return {
    type: addCart,
    payload: product,
  };
};
