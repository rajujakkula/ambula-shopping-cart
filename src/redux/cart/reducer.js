import { addCart } from "./actionTypeAdd";
import { delCart } from "./actionTypeDelete";
import { deleteProduct } from "./actionTypeDeleteProduct";

const initialstate = {
  cart: [],
};

export const reducer = (state = initialstate, action) => {
  const item = state.cart?.find((x) => x.id === action.payload.id);
  const inCart = state.cart.find((x) =>
    x.id === action.payload.id ? true : false
  );
  switch (action.type) {
    case addCart:
      return {
        ...state,
        cart: inCart
          ? state.cart?.map((x) =>
              x.id === action.payload.id
                ? { ...action.payload, qty: x.qty + 1 }
                : x
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case delCart:
      return {
        cart: inCart
          ? item.qty === 1
            ? state.cart?.filter((x) => x.id !== action.payload.id)
            : state.cart?.map((x) =>
                x.id === action.payload.id
                  ? { ...action.payload, qty: x.qty - 1 }
                  : x
              )
          : [...state.cart],
      };
    case deleteProduct:
      return {
        ...state,
        cart: state.cart?.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};
