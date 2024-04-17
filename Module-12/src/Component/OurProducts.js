import React from "react";
import { useProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

function OurProducts() {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <h2>......LOADING!!!</h2>;
  }

  return (
    <div className="bg-light">
      <div className="container">
        <h2 className="fw-bold fs-2 pt-5">Our Products</h2>
        <p className="fs-5 mb-5">Grab The Products That You Want</p>
        <div className="row mb-5 row-gap-4 justify-content-center">
          {featureProducts.map((curEle, id) => (
            <div className="col-md-6 col-lg-4 col-9 " key={id}>
              <div className="card-wrapper">
                <div className="our-img position-relative overflow-hidden">
                  <Link to={`/singleproduct/${id}`} className="d-block zoom">
                    <img
                      src={`${curEle.img}`}
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </Link>
                    <Link to={`/singleproduct/${id}`}>
                    <button className="click rounded-1">Click Here</button>
                    </Link>
                </div>
                <div className="details p-3 ">
                  <h6 className="fw-bolder fs-5">{curEle.discription}</h6>
                  <span className="text-decoration-line-through">
                    {curEle.overline}
                  </span>{" "}
                  <span className="text-danger fw-bold">{curEle.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
