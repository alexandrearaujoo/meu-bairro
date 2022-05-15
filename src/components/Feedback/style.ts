import styled from "styled-components";

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