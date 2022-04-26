import styled from "styled-components";

export const Section = styled.section`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  .dot1,
  .dot2,
  .dot3 {
    width: 15px;
    height: 15px;
    border: double;
    border-color: white;
    border-radius: 50%;
    margin: 10px;
  }

  .dot1 {
    animation: jump765 1.6s -0.32s linear infinite;
    background: #2495ff;
  }

  .dot2 {
    animation: jump765 1.6s -0.16s linear infinite;
    background: #2495ff;
  }

  .dot3 {
    animation: jump765 1.6s linear infinite;
    background: #2495ff;
  }

  @keyframes jump765 {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }
`;
