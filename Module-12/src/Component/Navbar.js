import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAddCart } from '../Context/addContext';

function Navbar() {
  const {total_item} = useAddCart()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand fs-1 fw-bolder text-danger" href="#">SHOPPY<span className='text-dark'>CART</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-dark">
        <li className="nav-item">
          <NavLink className="nav-link fw-normal" to="/" style={({ isActive }) => {
 return isActive ? { color: "red" } : {color : "black"};
 }} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-normal" to="/about" style={({ isActive }) => {
 return isActive ? { color: "red" } : { color : "black"};
 }}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-normal" to="/products" style={({isActive}) =>{
            return isActive ? {color : "red"} : {color : "black"}
          }} >Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-normal" to="/contact" style={({isActive})=>{
            return isActive ? {color : "red"} : {color : "black"}
          }}>Contact</NavLink>
        </li>
      </ul>
      <form className="row align-items-center justify-content-center me-1 mb-sm-2 mb-md-2">
        <Link to="/login">
        <button className="btn btn-danger px-4" type="submit">
        <i className="fa-solid fa-user me-3"></i>
          Login 
        </button>
        </Link>
      </form>
      <div className='position-relative'>
        <i className="fa-solid fa-cart-arrow-down fs-4 text-danger"></i>
        <span className='position-absolute rounded-5 rounded-circle  bg-dark text-light' style={{top:"-14px", right:"-17px", fontSize: "12px" , height:"20px", width: "20px",lineHeight:"20px"}}>{total_item}</span>
      </div>
    </div>
  </div>
    </nav>
    </div>

  // dekho ho   gya par achs ni lg rha  proper ni bna u
  )
}

export default Navbar
