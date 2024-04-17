import React from "react";
import Banner from "./Banner";
import { useFilterContext } from "../Context/FilterContext";
import ProductList from "./ProductList";
import Footer from "./Footer";
function Products() {
const {filter_products} = useFilterContext()




  const data = {
    name: "Product",
  };
  return (
    <div>
      <div>
        <Banner myData={data} />
      </div>
      <section className="about_products mt-5">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 mb-5 pb-4">
              <aside className=" pe-4">
                <div className="aside-wrappere bg-light p-4 rounded-2 shadow">
                <div className="left_side">
                  <div className="products">
                    <h5 className="text-start ps-3 mb-3 fw-bold">
                      Product Categories
                    </h5>
                    <ul className="list-group list-group-flush text-start">
                      <li className="list-group-item d-flex justify-content-between align-items-start text-secondary bg-light">
                        Accessories
                        <span className="bg-dark text-light px-2 rounded-2">
                          14
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center text-secondary bg-light">
                        Suits
                        <span className="bg-dark text-light px-2 rounded-2">
                          18
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center text-secondary bg-light">
                        Footwear
                        <span className="bg-dark text-light px-2 rounded-2">
                          12
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center text-secondary bg-light">
                        Blazers
                        <span className="bg-dark text-light px-2 rounded-2">
                          10
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="products">
                    <h5 className="text-start mb-4 mt-5 ps-3 fw-bold">
                      Filter By Price
                    </h5>
                  </div>
                  <div className="products">
                    <h5 className="text-start mb-4 mt-5 ps-3 fw-bold">
                      Discount
                    </h5>
                    <div className="ps-3 text-start">
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                          checked readOnly
                        ></input>
                        15% or More
                      </label>
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                        ></input>
                        20% or More
                      </label>
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                        ></input>
                        35% or More
                      </label>
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                        ></input>
                        55% or More
                      </label>
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                        ></input>
                        65% or More
                      </label>
                      <label className="d-block">
                        <input
                          type="checkbox"
                          className="me-2 form-check-input"
                        ></input>
                        75% or More
                      </label>
                    </div>
                  </div>
                  <div className="products">
                    <h5 className="text-start mb-4 mt-5 ps-3 fw-bold">
                      Discount
                    </h5>
                    <ul className="ratings text-start ps-3">
                      <li className="text-secondary">
                        <span
                          className="fas fa-star text-start"
                          aria-hidden="true"
                        ></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="ms-2">5.0</span>
                      </li>
                      <li className="text-secondary">
                        <span
                          className="fas fa-star text-start"
                          aria-hidden="true"
                        ></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>
                        <span className="ms-2">4.5</span>
                      </li>
                      <li className="text-secondary">
                        <span
                          className="fas fa-star text-start"
                          aria-hidden="true"
                        ></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="ms-2">4.0</span>
                      </li>
                      <li className="text-secondary">
                        <span
                          className="fas fa-star text-start"
                          aria-hidden="true"
                        ></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>
                        <span className="ms-2">3.5</span>
                      </li>
                      <li className="text-secondary">
                        <span
                          className="fas fa-star text-start"
                          aria-hidden="true"
                        ></span>
                        <span className="fas fa-star" aria-hidden="true"></span>
                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>

                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>

                        <span
                          className="fas fa-star-half-alt"
                          aria-hidden="true"
                        ></span>

                        <span className="ms-2">2.5</span>
                      </li>
                    </ul>
                  </div>
                  <div className="products">
                  <h5 className="text-start mb-4 mt-5 ps-3 fw-bold">Recent Products</h5>
                   <div className="row ps-3 mb-3 justify-content-center align-items-center">
                     <div className="col col-lg-4">
                         <img src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/shop-8.jpg" alt="" className="img-fluid rounded-1 "/>
                     </div>
                     <div className="col col-lg-8">
                         <h6 className="fw-bold fs-5">Blue Sweater</h6>
                         <p className="text-danger fw-bold fs-6">$499</p>
                     </div>
                   </div>
                   <div className="row ps-3 justify-content-center align-items-center pb-5">
                     <div className="col col-lg-4">
                         <img src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/shop-7.jpg" alt="" className="img-fluid rounded-1 "/>
                     </div>
                     <div className="col col-lg-8">
                         <h6 className="fw-bold fs-5">Blue Sweater</h6>
                         <p className="text-danger fw-bold fs-6">$499</p>
                     </div>
                   </div>
                  </div>
                </div>
                </div>
              </aside>
            </div>
            <div className="col col-lg-8">
              <div className="row mt-4">
                <div className="col col-lg-6">
                  <h6 className="text-secondary fs-5 fw-bold">Showing All 9 Results</h6>
                </div>
                <div className="col col-lg-6">
                 
                 
                </div>
              </div>
                <ProductList product={filter_products}/>  
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Products;
