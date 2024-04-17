import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import Footer from "./Footer";
import Banner from "./Banner";
function About() {
  const data = {
    name : "About"
  }
  return (
    
    <div>
      <div>
      <Banner myData={data}/>
      </div>
      <div className="py-5">
        <div className="container py-md-5 py-2 pb-0">
          <div className=" text-center">
            <div>
              <h6 className="mb-1 text-danger fw-bold fs-5">Our Info</h6>
              <h2 className="fw-bold mt-3">About Our ShoppyKart</h2>
            </div>
            <p className="mt-3 fs-5 text-secondary">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              <br />
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet
              <br />
              elit ipsum dolor.Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
              <br />
              Nulla non ipsum soluta perferendis veniam qui esse magnam commodi
              quisquam.
            </p>
            <a
              href="#"
              className="btn btn-style btn-danger px-4 py-3 mt-sm-3 mt-2"
            >
              Read More<i className="fas fa-arrow-right ms-lg-3 ms-2"></i>
            </a>
          </div>
        </div>
      </div>
      <div>         
      <Counter />
      </div>
     {/* mid banner section  */}
      <section>
      <div className="mid-banner py-5">
        <section className="w-item-right py-sm-5 ">
          <div className="container">
            <div className="w-item-gids d-flex justify-content-between align-items-center">
              <div className="w-item-flex text-start">
                <h6 className="inner text-danger">OUR SPECIAL OFFER</h6>
                <h1 className="text-light fw-bolder mt-4">Up To 60% Off Now
                  <br />Enjoy The Season Sale</h1>
              </div>
              <div className="w-item-right">
                  <Link to="/contact" className="text-decoration-none btn btn-danger px-5 fs-5 py-3">
                    Contact
                    <i className="fas fa-arrow-right ms-lg-3 ms-2"></i>
                  </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      </section>

      <section className="team py-5">
         <div className="container">
          <div className="title">
             <h6 className="text-center text-danger fw-bolder">OUR TEAM</h6>  
             <h2 className="text-center text-dark fw-bold">Our Creative Team.</h2>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="teams">
                <div className="team-pic">
                  <img src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/team1.jpg" alt="" className="img-fluid"/>
              </div>
              <div className="team-info">
              <h5 className="text-start">Walter White</h5>
              <p className="text-start">Chief Executive Officer</p>
                <div className="social-icon">
                <a href="#facebook" className="facebook text-danger"><span className="fab fa-facebook-f"></span></a>
                <a href="#twitter" className="twitter mx-2 text-danger"><span className="fab fa-twitter"></span></a>
                <a href="#linkd" className="linkd text-danger"><span className="fab fa-linkedin-in"></span></a>
                </div> 
              </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="teams">
                <div className="team-pic">
                  <img src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/team2.jpg" alt="" className="img-fluid"/>
              </div>
              <div className="team-info">
              <h5 className="text-start">Sarah Jolder</h5>
              <p className="text-start">Product Manager</p>
                <div className="social-icon">
                <a href="#facebook" className="facebook text-danger"><span className="fab fa-facebook-f"></span></a>
                <a href="#twitter" className="twitter mx-2 text-danger"><span className="fab fa-twitter"></span></a>
                <a href="#linkd" className="linkd text-danger"><span className="fab fa-linkedin-in"></span></a>
                </div> 
              </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="teams">
                <div className="team-pic">
                  <img src="https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/team3.jpg" alt="" className="img-fluid"/>
              </div>
              <div className="team-info">
              <h5 className="text-start">William Andereson</h5>
              <p className="text-start">Sales Manager</p>
                <div className="social-icon">
                <a href="#facebook" className="facebook text-danger"><span className="fab fa-facebook-f"></span></a>
                <a href="#twitter" className="twitter mx-2 text-danger"><span className="fab fa-twitter"></span></a>
                <a href="#linkd" className="linkd text-danger"><span className="fab fa-linkedin-in"></span></a>
                </div> 
              </div>
                </div>
            </div>
          </div>
         </div>
      </section>
      <section>
        <Footer/>
      </section>

    </div>
  );
}

export default About;
