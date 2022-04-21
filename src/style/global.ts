import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-color: var(--white-50);
    }
    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
  
    a, li {
        text-decoration: none;
        list-style: none;
    }

    :root {
        --color-primary: #3D649F;
        --color-primary-50: #082552;
        --white: #FFFEFE;
        --white-50: #F2F2F2;  
        --color-secondary: #175D74;
        --color-secondary-50: #014257;
    }

`;

export default GlobalStyled;
