import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
 
  return (
    <>
      <Nav>
        <div className="menuIcon mt-3">
          <ul className="navbar-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
}
const Nav = styled.nav`
li {
 display: inline;
 margin-left: 25px;
 a {
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   text-transform: uppercase;
   &:hover,
   &:active {
     color: red;
   }
 }
}
`;

export default Navbar;
