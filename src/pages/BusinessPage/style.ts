import styled from "styled-components";

export const ArrowLeft = styled.button`
    position: fixed;
    left: 10px;
    top: 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;

    svg {
        color: var(--color-primary);
        width: 30px;
        height: 30px;
    }
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`