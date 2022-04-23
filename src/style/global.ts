import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    * {
  scrollbar-width: thin;
  scrollbar-color: #9D9D9D #D7E1E3;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 7px;
  width: 7px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #D7E1E3;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #9D9D9D;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #575757;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #565656;
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
        --grey-50: #2C2C2C;
    }

`;

export default GlobalStyled;
