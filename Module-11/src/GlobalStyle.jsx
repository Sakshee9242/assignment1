import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle `
* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family: "Work Sans", sans-serif;
    user-select : none;
    
}

h1{
    color : ${({theme})=> theme.colors.bg};
    font-size : 50px;
    font-weight: 900;
   
}
p{
    color : ${({theme})=> theme.colors.text};
    line-height : 1.5 ;
    margin-top : 1rem;
    font-size : 23px;
    font-weight: 400;
}
a{
    text-decoration: none;
}
li{
    list-style : none ;
}
input,textarea{
    max-width : 50rem;
    text-transform: capitalize;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
input[type="submit"]{
    max-width : 16rem;
    cursor : pointer;
    font-size : 15px;
    cursor: pointer;
}
.para{
    color : ${({theme})=> theme.colors.bg}; 
    font-size: 15px; 
}
`;