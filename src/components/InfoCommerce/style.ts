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

export const SectionAddress = styled.section`
  display: block;
  width: 100%;
  margin: 0 auto;

  div {
    display: flex;
    margin-left: 15px;
    height: 90px;
    margin: 0 auto;
    border-bottom: 1px solid;
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

export const SectionFeedback = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 15px;

  @media screen and (min-width: 728px){
    flex-direction: row;
    flex-wrap: wrap;
  }

  section {
  width: 270px;
  height: 135px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  margin-top: 15px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: 'Roboto';

    :hover {
      color: #f12f12;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-family: "Comfortaa";
`;
