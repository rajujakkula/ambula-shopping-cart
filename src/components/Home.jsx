import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/images/fashion.jpg"
          className="card-img"
          alt="fashion"
          height={"510px"}
        />
        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
