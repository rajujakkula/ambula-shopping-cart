import { delCart } from "./actionTypeDelete";

export const deleteCart = (product) => {
  return {
    type: delCart,
    payload: product,
  };
};
