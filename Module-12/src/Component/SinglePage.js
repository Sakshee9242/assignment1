import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProductContext } from "../Context/ProductContext";
import Footer from "./Footer";
import Banner from "./Banner";
import CartToggle from "./CartToggle";

const API = "http://localhost:3000/products";

function SinglePage() {

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProduct && singleProduct.length > 0) {
      setProductData(singleProduct[0]);
    }
  }, [singleProduct]);

  if (isSingleLoading) {
    return <h3>Loading.........!!!</h3>;
  }
  const data = {
    name : "Single"
  }
  return (
    <div>
      <Banner myData={data}/>
      {productData && (
        <>
          <div className="container bg-light rounded-5 mt-3 ">
            <div className="row justify-content-center bg-light rounded-3 shadow pb-4">
              <div className="col col-lg-6 p-5">
                {/* product img  */}
                <div className="img ms-4">
                  <img
                    src={productData.img}
                    alt=""
                    className="img-fluid rounded-2"
                  />
                </div>
              </div>
              <div class="col col-lg-6 mt-5 pe-5">
                <h3 className="text-danger mt-5 mb-3">
                  {productData.discription}
                </h3>
                <hr />
                <p className="text-start text-dark fs-6">
                  Reviews: {productData.reviews}
                </p>
                <div className="mt-1 text-start">
                  <span className="fs-5">MRP:</span> &nbsp;{" "}
                  <span className="text-secondary text-decoration-line-through">
                    {productData.overline}
                  </span>
                  <br />
                  <span className="text-black fs-5">Deal Of The Day :</span>
                  <span className="fs-5 text-danger fw-medium">
                    ${productData.price}
                  </span>
                  <p className="mt-2 fs-6 text-dark">{productData.about}</p>
                  {/* social icon section  */}
                  <hr />
                  <div className="row justify-content-center text-center mt-">
                    <div className="col col-lg-4">
                      <span>
                        <i className="fa-solid fa-truck-fast fs-3 text-danger"></i>
                        <p className=" text-dark">Free Delivery</p>
                      </span>
                    </div>
                    <div className="col col-lg-4">
                      <span>
                        <i className="fa-solid fa-house-circle-check fs-3 text-danger"></i>
                        <p className=" text-dark">10 Days Replacement</p>
                      </span>
                    </div>
                    <div className="col col-lg-4">
                      <span>
                        <i className="fa-solid fa-shield-halved fs-3 text-danger"></i>
                        <p className=" text-dark">1 Year Warranty</p>
                      </span>
                    </div>
                  </div>
                  {/* add to cart  */}
                  <section className="p-3 mt-3">
                    <CartToggle product={singleProduct}/>
                  </section>
                </div>
              </div>
            </div>           
          </div>
        </>
      )}
      <div className="mt-5">
       <Footer />
      </div>
    </div>
  );
}

export default SinglePage;
