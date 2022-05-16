import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 25px auto;
  border-radius: 15px;
  h1 {
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 500px;
  }
`;

export const DivPhoto = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  height: 300px;
  align-items: center;
  justify-content: space-evenly;

  figure {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  h2 {
    font-size: 18px;
    font-family: "Comfortaa";
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;

    div {
      flex-direction: row;
      justify-content: space-between;
      height: auto;
    }
  }
  section {
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      width: auto;
      
      svg {
        margin-right: 5px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;

export const SectionInfos = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 240px;
  background-color: var(--white);
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    height: 100%;
  }
`;

export const Sessions = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    background-color: transparent;
    border: none;
    margin-top: 5px;
    cursor: pointer;

    svg {
      color: var(--color-primary)
    }
  }

`


