import { deleteProduct } from "./actionTypeDeleteProduct";

export const delProduct = (product) => {
  return {
    type: deleteProduct,
    payload: product,
  };
};
