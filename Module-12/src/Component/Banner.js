import React from 'react'
import { Link } from 'react-router-dom'

function Banner({myData}) {
    const {name} = myData;
  return (
    <div>
       <div className="inner-banner py-5">
        <section className="w-item-right py-sm-5 ">
          <div className="container">
            <div className="w-item-gids d-flex justify-content-between align-items-center">
              <div className="w-item-flex">
                <h2 className="inner-w3-title text-light">{name}</h2>
              </div>
              <div className="w-item-right">
                <ul className="text-end d-flex">
                  <Link to="/" className="text-decoration-none">
                    <li className="text-danger">Home</li>
                  </Link>
                  <li className="text-light">
                    <span className="fas fa-angle-double-right mx-2"></span>
                    {name}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Banner
