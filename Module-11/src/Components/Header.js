import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import Navbar from './Navbar'
import styled from 'styled-components'
function Header() {

  return (
   <MainHeader>
    <NavLink to='/'>
        <img src={logo} alt="" className='logo'/>
    </NavLink>
    <Navbar></Navbar>
   </MainHeader>
  )
}
const MainHeader = styled.header`
  padding : 10px 40px;
  background-color : ${({theme})=> theme.colors.bg};
  display: flex;
  justify-content : space-between;
  align-items : center;
  .logo{
    height: 60px;
  }
`;

export default Header
