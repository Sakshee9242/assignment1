import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import OurProducts from "./OurProducts";
import { Link } from "react-router-dom";
function Home() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      {/* Hero Section is here  */}
      <div
        id="carouselExampleInterval"
        className="carousel slide home-slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner3.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block w-75">
              <h5 className="title-hero-18 text-danger fw-medium le fs-3 mb-2">
                Up To 60% Off Now
              </h5>
              <h1 className="title-hero-19 fw-bold">Mid Season Sale 40%</h1>
              <p className="mt-2 text-light fs-5 fw-bold title-hero-20">
                Final Clearance: Take 20% off ‘Sale Must-Haves'
              </p>
              <Link to="/products"
                className="btn btn-style btn-danger mt-sm-5 mt-5 py-3 px-4"
              >
                Start Shopping
                <i className="fas fa-arrow-right ms-lg-3 ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner1.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block w-75">
              <h5 className="title-hero-18 text-danger fw-medium le fs-3 mb-2">
                Fall Summer Clearance
              </h5>
              <h1 className="title-hero-19 fw-bold">Enjoy The Season Sale</h1>
              <p className="mt-2 fs-5 text-light fw-bold title-hero-20">
                Final Clearance: Take 20% off ‘Sale Must-Haves'
              </p>
              <Link to="/products"
                className="btn btn-style btn-danger mt-sm-5 mt-5 py-3 px-4"
              >
                Start Shopping
                <i className="fas fa-arrow-right ms-lg-3 ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner4.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block w-75">
              <h5 className="title-hero-18 text-danger fw-medium le fs-3 mb-2">
                Up To 60% Off Now
              </h5>
              <h1 className="title-hero-19 fw-bold">Mid Season Sale 40%</h1>
              <p className="mt-2 fs-5 text-light fw-bold title-hero-20">
                Final Clearance: Take 20% off ‘Sale Must-Haves'
              </p>
              <Link to="/products"
                className="btn btn-style btn-danger mt-sm-5 mt-5 py-3 px-4"
              >
                Start Shopping
                <i className="fas fa-arrow-right ms-lg-3 ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-secondary p-4"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-black">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-secondary p-4"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* mid-Section is here  */}

      <div className="mid-section">
        <h3 className="fw-medium p-5 ">
          Free Shipping For You Till MidNight
          <i className="fas fa-shipping-fast ms-lg-3"></i>
        </h3>
      </div>
      <div className="py-5">
        <div className="container py-md-4">
          <div className="row">
            <div className="col-md-6 mt-md-0">
              <div className="position-relative">
                <a href="#" className="d-block zoom">
                  <img
                    src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="w3-info position-absolute text-start">
                  <h4 className="link-1">
                    <a href="#">
                      Platform Velvet <br />
                      Sandals
                    </a>
                    <br />
                    <a
                      className="w-item btn border border-1 p-3 mt-4 fw-bold"
                      href="#"
                    >
                      Shop Now <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="second position-relative">
                <a href="products-1.html" className="d-block zoom">
                  <img
                    src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner4.jpg"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>

                <div className="w3-info second position-absolute text-start">
                  <h4 className="link">
                    <a href="products-1.html">
                      Pebbled Weekend <br />
                      Bag
                    </a>
                    <br />
                    <a
                      className="w-item btn border border-1 mt-4 p-3 fw-bold"
                      href="#"
                    >
                      Shop Now <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal-Section is here  */}

      <section>
        <div className="deal_section py-5 text-start">
          <div className="container">
            <h2 className="fw-bolder text-start mb-5">Deals Of The Day</h2>
            <div className="row">
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 40% Off on Formal Wear
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className=" mt-3">
                      Min. 60% Off on Active Wear
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">Min. 40% Off on Shoes</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">Min. 50% Off on Shirts</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 50% Off on Clothing
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 60% Off on Sandles
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Discount Section is here  */}

      <section className="discount-section text-start">
        <div className="deal_section">
          <div className="container">
            <h2 className="fw-bolder text-start py-5">
              Best Discounts for You
            </h2>
            <div className="row">
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">Min. 40% Off on Swings</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 30% Off on Office Chairs
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 40% Off on Glass Mirror
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d10.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 50% Off on Makeup Kit
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d11.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 50% Off on Handbags
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d12.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 60% Off on Perfumes
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section is here  */}

      <section className="discount-section text-start">
        <div className="deal_section pb-5">
          <div className="container">
            <h2 className="fw-bolder text-start py-5">Best Offers for You</h2>
            <div className="row">
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d13.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">40% Off on Kids Wear</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d14.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 30% Off on Face Packs
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d15.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 30% Off on Women Heels
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d16.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 40% Off on Baby Toys
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d17.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">
                      Min. 60% Off on Herbal Products
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-2">
                <div>
                  <a href="" className=" d-block rounded zoom">
                    <img
                      src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/d8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div>
                    <h5 className="mt-3">Min. 30% Off on Chairs</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section is here  */}

      <section className="video p-5">
        <div className="container p-5">
          <div className="video-info">
            <div className="video-title text-center py-5 text-light">
              <h1 className="fw-bold mt-5">
                Pre-Fall Collection,That mid-summer <br />
                Craving For Fall Styles?
              </h1>
              <div
                onClick={() => setIsShown(!isShown)}
                className="history-info py-lg-5 align-self pt-0"
              >
                <div className="position-relative mt-lg-3 py-5 pt-lg-0">
                  <a id="play-video" className="video-play-button">
                    <span></span>
                  </a>

                  <div className={!isShown ? "overly" : "add-class"}>
                    <div id="small-dialog" className="zoom-anim-dialog">
                      <video
                        loop
                        controls
                        autoPlay
                        muted
                        width={500}
                        height={280}
                      >
                        <source
                          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <span
                        onClick={() => setIsShown(!isShown)}
                        className="position-absolute btn btn-danger"
                      >
                        X
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section is here  */}

      <section>
        <div className="container py-md-5">
          <div className="subscription-info">
            <i className="far fa-envelope text-danger"></i>
            <h2 className="mb-2 fw-bold">Get On The List</h2>
            <h5 className="text-secondary fw-light">
              Shop Exclusive Promos & SAVE 20% on Your First Order
            </h5>
            <form
              action="#"
              method="post"
              className="w3l-signin-form mt-4 mb-3"
            >
              <div className="forms-gds">
                <div className="form-input">
                  <input
                    type="email"
                    name=""
                    placeholder="Your email here"
                    required=""
                    className=" mx-1 px-5 py-3 rounded border-1 border-secondary"
                  />
                  <button className="btn btn-danger px-4 py-3">
                    Subscribe
                  </button>
                </div>
              </div>
              <p className="mt-4 fw-normal">
                By entering your email, you are accepting our <br />
                <a href="#" className="text-decoration-none text-danger">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-decoration-none text-danger">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
      <div>
          <OurProducts />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
