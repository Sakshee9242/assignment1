import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
function ProductList({product}) {
  return (
        <div>
        <div class="row row-gap-3">           
        {product && product.map((ele,id)=>(
            <div className='col-lg-4'>
                 <div className="card-wrapper">
                <div className="our-img position-relative overflow-hidden">
                  <Link to={`/singleproduct/${id}`} className="d-block zoom">
                    <img
                      src={`${ele.img}`}
                      alt=""
                      className="img-fluid rounded-2"
                    />
                  </Link>
                    <Link to={`/singleproduct/${id}`}>
                    <button className="click rounded-1">Click Here</button>
                    </Link>
                </div>
                <div className="details p-3">
                  <h6 className="fw-bolder">{ele.discription}</h6>
                  <span className="text-decoration-line-through">
                    {ele.overline}
                  </span> <span></span> <span className="text-danger fw-bold">${ele.price}</span>
                </div>
              </div>
            </div>
        ))}
        </div>
        </div>
  )
}

export default ProductList
