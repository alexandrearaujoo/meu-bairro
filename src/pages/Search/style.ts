import styled from "styled-components";

export const InputContainer = styled.div`
  height: 40px;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
  max-width: 350px;
  @media screen and (min-width: 1024px) {
        margin-left: 15px;
    }

  input {
    height: 100%;
    padding: 2px;
    background-color: transparent;
    border: none;
    width: 100%;
  }
  button {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px solid #000;
  @media screen and (min-width: 1024px) {
    align-items: inherit;
  }

  h1 {
    color: var(--color-primary);
    font-family: "Comfortaa";
    @media screen and (min-width: 1024px) {
        margin-left: 15px;
    }
  }
`;
