import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/index";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="row justify-content-center">
          <div
            className="col-md-6 placeholder rounded p-2"
            style={{ width: "250px", height: "300px" }}
          ></div>
          <div className="col-md-6">
            <h5 className="card-title placeholder-glow rounded">
              <span className="placeholder col-6 "></span>
            </h5>
            <p className="card-text placeholder-glow rounded m-"></p>
            <p className="placeholder col-4 rounded"></p>
            <p className="placeholder col-9 rounded"></p>
            <p className=" placeholder col-5 rounded"></p>
            <p className=" placeholder col-8 rounded"></p>
            <p className=" placeholder col-11 rounded"></p>
            <div className="col-12 mt-4 ms-1">
              <p
                className="placeholder col-4 rounded"
                style={{ width: "100px", height: "40px" }}
              ></p>
              <p
                className="placeholder col-4 rounded ms-3"
                style={{ width: "100px", height: "40px" }}
              ></p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row p-2">
          <div className="col-md-4  my-auto">
            <img src={product.image} alt={product.title} className="w-100 " />
          </div>
          <div className="col-md-6 ms-2 ">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h3>{product.title}</h3>
            <p className="lead fw-bolder">
              Rating {product.rating?.rate}
              <i className="fa fa-star ms-2"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark my-3"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <NavLink to="/cart" className="btn btn-dark ms-3">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="card mx-auto py-3">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
