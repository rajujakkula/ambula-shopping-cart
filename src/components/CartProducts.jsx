import React from "react";
import { addToCart, deleteCart, delProduct } from "../redux";
import { useSelector, useDispatch } from "react-redux";
const CartProducts = () => {
  const products = useSelector((state) => state.details.cart);
  const dispatch = useDispatch();
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            className="card my-4 mx-auto"
            style={{ maxWidth: "700px" }}
            key={product.id}
          >
            <div className="row g-0">
              <div className="col-md-4 my-auto">
                <img
                  src={product.image}
                  className="img-fluid rounded-start p-2 "
                  alt={product.title}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h6 className="text-muted">{product.category}</h6>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                    <i className="ms-5 lead fw-bolder">
                      Total Price: ${Math.ceil(product.qty * product.price)}
                    </i>
                  </p>
                  <button
                    className="btn btn-outline-dark  me-3"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    +
                  </button>
                  {product.qty}
                  <button
                    className="btn btn-outline-dark  ms-3"
                    onClick={() => dispatch(deleteCart(product))}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="col-md-1 mx-md-auto d-none d-sm-block">
                <button
                  className="btn-close  my-3 ms-5 "
                  onClick={() => dispatch(delProduct(product))}
                ></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center my-5">No Products To Display</h2>
      )}
    </>
  );
};

export default CartProducts;
