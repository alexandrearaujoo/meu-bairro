import styled from "styled-components";

export const Navbar = styled.nav`
  width: 75%;
  height: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    svg {
      width: 30px;
      height: 30px;
      color: var(--color-primary);
    }
    span {
      display: none;

      @media screen and (min-width: 768px){
        display: block;
        font-family: 'Comfortaa';
        color: var(--grey);
      }
    }
  }
`;

export const HeaderStyled = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 8px -4px rgba(0, 0, 0, 0.65);
`;
