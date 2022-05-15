import styled from "styled-components";

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

export const Title = styled.h1`
  font-size: 18px;
  font-family: "Comfortaa";
`;        