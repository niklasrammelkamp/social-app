import { createGlobalStyle } from "styled-components";
import "./fonts/poppins-v20-latin-200.eot";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --body-color: rgb(245, 245, 245); //rgb(245, 245, 245)
    --article-color: white;
    --font-color: rgb(180, 180, 180);
    --headline-color: rgb(50, 50, 50);
    --primary-color: rgb(62,87,230);
    --primary-color-shadow: rgba(62, 87, 230, 0.4);
    --secondary-color: rgb(230, 233, 250);
  }

  body {
    padding: 0;
    margin: 0;
    background-color: var(--body-color);
    font-family: 'Poppins';
    font-weight: 200;
  }

  main {
    padding: 50px 15px 15px 15px;

  }

  
`;

export default GlobalStyle;
