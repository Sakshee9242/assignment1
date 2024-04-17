import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div>
        <div className="inner-banner py-5">
        <section className="w-item-right py-sm-5 ">
            <div className="container">
                <div className="w-item-gids d-flex justify-content-between align-items-center">
                    <div className="w-item-flex">
                        <h2 className="inner-w3-title text-light">
                            Login </h2>
                    </div>
                    <div className="w-item-right">
                        <ul className="text-end d-flex">
                            <Link to="/" className='text-decoration-none'>
                            <li className='text-danger'>Home</li>
                            </Link>
                            <li className='text-light'><span className="fas fa-angle-double-right mx-2"></span>Login</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
      <div className="Signup p-3">
        <div className="Container">
          <div className="row justify-content-center">
            <div className="col col-lg-4 text-start">
              <form>
                <h4 className="p-3">Login to your account</h4>
                <div className="Input-form pt-2 px-3">
                  <h6>Username</h6>
                  <input
                    placeholder="Username"
                    className="form-control"></input>
                </div>
                <div className="Input-form pt-2 px-3">
                  <h6>Password</h6>
                  <input
                    placeholder="Password"
                    className="form-control"></input>                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
