import React from "react";
import about from "./About.png";
import styled from "styled-components";
import menu from "./Rectángulo 1.png";

function About() {
  return (
    <Wrapper>
      <div className="container px-5 py-5">
        <div className="row gap-5">
          <div className="col col-lg-4">
            <img src={about} alt="" height={300} />
          </div>
          <div className="col col-lg-7">
              <h1 className="hero-heading">About Mariachi</h1>
              <p className="hero-top-data">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Vivamus lacinia odio vitae vestibulum vestibulum.
              </p>
              <Button className="btn">Order Now</Button>
          </div>
        </div>
      </div>
      <div>
      <img src={menu} className="img-fluid" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
    h1 {
      color: ${({ theme }) => theme.colors.bg} !important;
    }
    p {
      color: ${({ theme }) => theme.colors.bg};
    }
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bg};
  margin-top: 15px;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 33px;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.footer_bg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default About;
