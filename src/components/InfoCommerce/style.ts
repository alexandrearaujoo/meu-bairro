import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  box-shadow: 2px 4px 13px -2px rgba(38, 0, 255, 0.73);
  margin: 0 auto;
  border-radius: 15px;
  h1 {
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 580px;
  }
`;

export const SectionAddress = styled.section`
  display: block;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;

  div {
    display: flex;
    margin-left: 15px;
    height: 90px;
    margin: 0 auto;
    border-bottom: 1px solid;
  }
  h1 {
    font-size: 20px;
    font-family: "Comfortaa";
  }
`;

export const DivPhoto = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  height: 290px;
  justify-content: space-evenly;

  figure {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  h2,
  h1 {
    font-family: "Comfortaa";
  }
  h2 {
    font-size: 18px;
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

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;

export const SectionInfos = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionGalery = styled.section`
  background-color: var(--white);
  height: 100%;
  h1 {
    font-size: 18px;
    font-family: "Comfortaa";
  }
  div {
    display: flex;
    overflow-x: scroll;
    @media screen and (min-width: 1024px) {
      flex-wrap: wrap;
      width: 84%;
      max-width: 595px;
      margin: 0 auto;
      justify-content: space-evenly;
      overflow: hidden;
      margin-top: 5px;
    }
    img {
      width: 200px;
      height: 200px;
      margin-left: 10px;
      @media screen and (min-width: 1024px) {
        margin: 0;
        margin-top: 5px;
      }
    }
  }
`;

export const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    max-width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
