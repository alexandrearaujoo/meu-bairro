import styled from "styled-components";

export const SectionGalery = styled.section`
  height: 100%;
  margin-bottom: 15px;

  div {
    display: flex;
    overflow-x: scroll;
    @media screen and (min-width: 1024px) {
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: space-evenly;
      overflow: hidden;
      margin-top: 5px;
    }
    img {
      width: 170px;
      height: 170px;
      margin-left: 10px;
      @media screen and (min-width: 1024px) {
        margin: 0;
        margin-top: 5px;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-family: "Comfortaa";
`;