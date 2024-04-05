import React from 'react'
import styled from 'styled-components'
import background from "./background.png"
import {Button} from "../Styles/Button"

function HeroSection() {
  return (
    <Wrapper>
        <div className='container'>
         <div className='row'>
            <div className="col-8 col-lg-12">
            <h1 className='hero-heading'>Mariachi</h1>
            <p className='hero-top-data'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br/> Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <Button className='btn'>
                Order Now
            </Button>
            </div>
         </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
background : url(${background});
background-size : 100% 100%;
padding : 130px 80px;
h1{
    color : ${({theme})=> theme.colors.text}
}
`
export default HeroSection
