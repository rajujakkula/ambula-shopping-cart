import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  let imaginaryProducts = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    // console.log();
    return (
      <>
        {imaginaryProducts.map((x) => (
          <div className="col-md-3 mb-4" key={x}>
            <div className="card h-100 text-center  p-2">
              <div
                className="placeholder rounded p-2"
                style={{ width: "250px", height: "200px" }}
              ></div>
              <p className="mx-auto col-9 placeholder mt-3"></p>
              <button
                className="mx-auto placeholder btn "
                style={{ width: "90px", height: "32px" }}
              ></button>
            </div>
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3 ">
          <button
            className="btn btn-outline-dark"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark mx-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((products) => {
          return (
            <div className="col-md-3 mb-4" key={products.id}>
              <div className="card h-100 text-center  p-4">
                <img
                  src={products.image}
                  className="card-img-top"
                  alt={products.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {products.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">${products.price}</p>
                  <NavLink
                    to={`/products/${products.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-3 ">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="display-6 fw-bloder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
