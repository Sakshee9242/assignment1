import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function ErrorPage() {
  return (
    <div>
      <div className="container w-75">
        <div className="row bg-danger p-5 mt-5 shadow-lg rounded-2">      
        <h2>404</h2>
        <h2 className='mt-3'>UH OH ! You're Lost. </h2>
        <p className='mt-4 text-light'>The Page You Are Looking For Does Not Exist. <br/> Seems Like You Are Lost.  <br/> If You Want To Go To Home Page Click The Below Button</p>
        <Link to="/">
            <button className='btn btn-outline-light fs-5 mt-4'>Home</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
