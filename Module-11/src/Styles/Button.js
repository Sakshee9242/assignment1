import styled from "styled-components";

export const Button = styled.button`
margin-top : 15px;
font-weight: 700;
font-size: 15px;
text-transform: uppercase;
border : none;
width: 200px;
height: 50px;
border-radius: 33px;
background-color: ${({theme})=> theme.colors.text};
color: ${({theme})=> theme.colors.bg};
transition : .5s ease-in-out;
&:hover{
    background-color :  ${({theme})=> theme.colors.bg};
    color :  ${({theme})=> theme.colors.text};
}
`