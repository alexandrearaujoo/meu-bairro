import styled from "styled-components";

export const Navbar = styled.nav`
  div {
    display: block;
    position: relative;
    top: 3px;
    left: 5px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    a {
      color: var(--grey-50);
      transition: color 0.3s ease;

      :hover {
        color: red;
      }
    }

    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
      -webkit-touch-callout: none;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: var(--grey-50);
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    span:first-child {
      transform-origin: 0% 0%;
    }
    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }
    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    input:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    ul {
      position: absolute;
      width: 300px;
      height: 100vh;
      margin: -42px 0 0 -50px;
      padding: 60px;
      padding-top: 50px;

      background: var(--white-50);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      transform-origin: 0% 0%;
      transform: translate(-100%, 0);

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

      li {
        padding: 10px 0;
        font-size: 15px;
        font-family: 'Roboto';
      }
    }
    input:checked ~ ul {
      transform: none;
    }
  }
`;

export const HeaderStyled = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
