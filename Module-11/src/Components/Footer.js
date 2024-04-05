import React from 'react'
function Footer() {
  return (
    <div style={{background:"#ffd7ad"}}>    
<footer className="text-center text-lg-center">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Mariachi
          </h6>
          <p  className='para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. 
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          About
          </h6>
          <p className='para'>
            <a href="#!" className="text-reset">History</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Our Team</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Brand Guidelines</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Terms & Condition</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Privacy Policy</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          Services
          </h6>
          <p className='para'>
            <a href="#!" className="text-reset">How to Order</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Our Product</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Offers</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Promo</a>
          </p>
          <p className='para'>
            <a href="#!" className="text-reset">Payment Method</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Other</h6>
          <p className='para'>Contact Us</p>
          <p className='para'>
          Help
          </p>
        </div>
      </div>
    </div>
  </section>
</footer>
    </div>
  )
}


export default Footer
